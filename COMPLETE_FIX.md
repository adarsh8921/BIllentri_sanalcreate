# Complete Fix for json_decode Null Error and Data Format

## Problem Analysis

1. **Thunder Client works** - Sends form data with field "data" containing JSON string
2. **Website fails** - Was sending raw JSON, now fixed to match Thunder Client format
3. **PHP Error at line 170** - `json_decode()` receiving null value

## Solution Applied

### 1. JavaScript (index.html) - Fixed Data Format

**Changed from:**
```javascript
contentType: 'application/json',
data: JSON.stringify(params)
```

**Changed to:**
```javascript
contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
data: {
  'data': JSON.stringify(params)
}
```

This matches the Thunder Client format that works.

### 2. PHP Controller (Master.php) - Fixed Null Handling

**Key Changes:**
- Checks if `$data['data']` exists and is a non-empty string before decoding
- Handles both form data and raw JSON input
- Proper null checking at line 170 area
- Returns error in correct format: `[{"status": false, "result": "...", "CompanyID": 0}]`

## Server File Fix Required

You still need to update the server file at:
`/home/assurelite/public_html/Api/application/controllers/Master.php`

**Find line 170 (or wherever json_decode is called with potentially null value):**

Replace:
```php
$companyData = json_decode($data['data'], true);
```

With:
```php
$jsonString = isset($data['data']) ? $data['data'] : null;
$companyData = null;
if (!empty($jsonString) && is_string($jsonString) && trim($jsonString) !== '') {
    $companyData = json_decode($jsonString, true);
    if (json_last_error() !== JSON_ERROR_NONE) {
        $companyData = null;
    }
}
```

## Expected Request Format

The website now sends (matching Thunder Client):
```
Content-Type: application/x-www-form-urlencoded

data={"CompanyName":"adarsh","BankAccount":"CASH",...}
```

## Expected Response Format

**Success:**
```json
[
  {
    "status": true,
    "result": "OK",
    "CompanyID": "138"
  }
]
```

**Error:**
```json
[
  {
    "status": false,
    "result": "Error message",
    "CompanyID": 0
  }
]
```

## Testing

1. Update the server file with the null check fix
2. Test from website - should work now
3. Check browser console for request logs
4. Verify no PHP errors appear

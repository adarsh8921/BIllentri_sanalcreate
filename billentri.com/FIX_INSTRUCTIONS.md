# Fix for json_decode() Null Error at Line 170

## Problem
You're getting this error:
```
json_decode(): Passing null to parameter #1 ($json) of type string is deprecated
File: controllers/Master.php
Line: 170
```

This happens in PHP 8.1+ when `json_decode()` receives a `null` value instead of a string.

## Solution

### Step 1: Open your server file
Open `/home/assurelite/public_html/Api/application/controllers/Master.php` on your server.

### Step 2: Find line 170
Look for a line that looks like this:
```php
$data = json_decode($someVariable, true);
```

### Step 3: Replace with this fix

**BEFORE (causes error):**
```php
$data = json_decode($someVariable, true);
```

**AFTER (fixed):**
```php
$data = null;
if (!empty($someVariable) && is_string($someVariable)) {
    $data = json_decode($someVariable, true);
    if (json_last_error() !== JSON_ERROR_NONE) {
        $data = null;
    }
}
```

### Step 4: Alternative - Add Helper Method

If you have multiple `json_decode()` calls, add this helper method to your `Master` class:

```php
/**
 * Helper method to safely decode JSON
 */
private function safeJsonDecode($jsonString, $assoc = true) {
    if (empty($jsonString) || !is_string($jsonString)) {
        return null;
    }
    
    $decoded = json_decode($jsonString, $assoc);
    
    if (json_last_error() !== JSON_ERROR_NONE) {
        return null;
    }
    
    return $decoded;
}
```

Then replace all `json_decode()` calls with:
```php
$data = $this->safeJsonDecode($someVariable, true);
```

## Common Patterns to Fix

Look for these patterns in your code and fix them:

1. **Direct call:**
   ```php
   // OLD
   $result = json_decode($input, true);
   
   // NEW
   $result = null;
   if (!empty($input) && is_string($input)) {
       $result = json_decode($input, true);
       if (json_last_error() !== JSON_ERROR_NONE) {
           $result = null;
       }
   }
   ```

2. **From POST/GET:**
   ```php
   // OLD
   $data = json_decode($this->input->post('data'), true);
   
   // NEW
   $postData = $this->input->post('data');
   $data = null;
   if (!empty($postData) && is_string($postData)) {
       $data = json_decode($postData, true);
       if (json_last_error() !== JSON_ERROR_NONE) {
           $data = null;
       }
   }
   ```

3. **From raw input stream:**
   ```php
   // OLD
   $data = json_decode($this->input->raw_input_stream, true);
   
   // NEW
   $input = $this->input->raw_input_stream;
   $data = null;
   if (!empty($input) && is_string($input)) {
       $data = json_decode($input, true);
       if (json_last_error() !== JSON_ERROR_NONE) {
           $data = null;
       }
   }
   ```

## Testing

After making the fix:
1. Save the file
2. Test adding a company again
3. The error should be gone
4. The response should be in the format: `{"data": "{\"CompanyName\":\"...\",...}"}`

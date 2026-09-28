# EXACT FIX FOR LINE 170 IN Master.php

## The Problem
You're getting this error at line 170:
```
json_decode(): Passing null to parameter #1 ($json) of type string is deprecated
```

## The Solution

Open your server file:
```
/home/assurelite/public_html/Api/application/controllers/Master.php
```

### Find line 170 (or wherever json_decode is called with a potentially null value)

Look for code like this:
```php
$companyData = json_decode($data['data'], true);
```

OR

```php
$companyData = json_decode($someVariable, true);
```

### Replace it with this EXACT code:

```php
// Fix for json_decode null issue at line 170
$jsonString = isset($data['data']) ? $data['data'] : null;
$companyData = null;
if (!empty($jsonString) && is_string($jsonString)) {
    $companyData = json_decode($jsonString, true);
    if (json_last_error() !== JSON_ERROR_NONE) {
        $companyData = null;
    }
}
```

### OR if the variable name is different, use this pattern:

```php
// Replace $jsonString with your actual variable name
$jsonString = $yourVariable; // Replace $yourVariable with actual variable
$companyData = null;
if (!empty($jsonString) && is_string($jsonString)) {
    $companyData = json_decode($jsonString, true);
    if (json_last_error() !== JSON_ERROR_NONE) {
        $companyData = null;
    }
}
```

## Complete Method Example

If your `add_company()` method looks like this:

```php
public function add_company() {
    $input = $this->input->raw_input_stream;
    $data = json_decode($input, true); // This might be line 170
    
    // ... rest of code
    $companyData = json_decode($data['data'], true); // Or this might be line 170
}
```

Replace with:

```php
public function add_company() {
    $input = $this->input->raw_input_stream;
    
    // Fix for first json_decode
    $data = null;
    if (!empty($input) && is_string($input)) {
        $data = json_decode($input, true);
        if (json_last_error() !== JSON_ERROR_NONE) {
            $data = null;
        }
    }
    
    if (empty($data)) {
        $data = $this->input->post();
    }
    
    // Fix for second json_decode (this is likely line 170)
    $companyData = null;
    if (isset($data['data']) && is_string($data['data']) && !empty($data['data'])) {
        $companyData = json_decode($data['data'], true);
        if (json_last_error() !== JSON_ERROR_NONE) {
            $companyData = null;
        }
    }
    
    // Validate
    if (empty($companyData)) {
        $response = [
            [
                'status' => false,
                'result' => 'Invalid or missing company data',
                'CompanyID' => 0
            ]
        ];
        $this->output
            ->set_content_type('application/json')
            ->set_output(json_encode($response));
        return;
    }
    
    // ... rest of your business logic
}
```

## Testing

After making the fix:
1. Save the file
2. Try adding a company again
3. The error should be gone
4. Check that the data format is correct in the request

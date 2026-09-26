<?php
/**
 * FIX FOR LINE 170 IN Master.php
 * 
 * Copy and paste this code to replace the problematic line 170
 * 
 * Find this pattern around line 170:
 * $data = json_decode($variable, true);
 * 
 * Replace with the code below:
 */

// ============================================
// FIXED CODE - Replace line 170 with this:
// ============================================

// OLD CODE (causes error):
// $data = json_decode($someVariable, true);

// NEW CODE (fixed):
$data = null;
if (!empty($someVariable) && is_string($someVariable)) {
    $data = json_decode($someVariable, true);
    if (json_last_error() !== JSON_ERROR_NONE) {
        $data = null;
    }
}

// ============================================
// If you're not sure what variable name is used, 
// look at the context around line 170 in your file.
// Common variable names might be:
// - $input
// - $data
// - $json
// - $jsonString
// - $this->input->raw_input_stream
// - $this->input->post('data')
// ============================================

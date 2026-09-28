<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Master extends CI_Controller {

    public function __construct() {
        parent::__construct();
        // Add any initialization code here
    }

    /**
     * Add Company function
     * Fixed json_decode null issue and updated response format
     * URL: /Master/add_company
     */
    public function add_company() {
        // Get the input data - try POST first (form data), then raw input stream
        $data = $this->input->post();
        
        // If POST is empty, try raw input stream (for JSON requests)
        if (empty($data)) {
            $input = $this->input->raw_input_stream;
            if (!empty($input) && is_string($input)) {
                $decoded = json_decode($input, true);
                if (json_last_error() === JSON_ERROR_NONE) {
                    $data = $decoded;
                }
            }
        }
        
        // Handle the data format
        // Expected format: form field "data" containing JSON string
        // OR direct JSON object
        $companyData = null;
        
        if (isset($data['data']) && is_string($data['data'])) {
            // Format: {"data": "{\"CompanyName\":\"...\",...}"}
            // Fix for json_decode null issue at line 170
            $jsonString = $data['data'];
            if (!empty($jsonString) && is_string($jsonString) && trim($jsonString) !== '') {
                $companyData = json_decode($jsonString, true);
                if (json_last_error() !== JSON_ERROR_NONE) {
                    $companyData = null;
                }
            }
        } elseif (!empty($data) && isset($data['CompanyName'])) {
            // Direct format: {"CompanyName":"...","BankAccount":"...",...}
            $companyData = $data;
        }
        
        // Validate company data
        if (empty($companyData) || !is_array($companyData)) {
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
        
        // Process company data (add your business logic here)
        // Example: Insert into database, validate, etc.
        
        // Prepare the response in the desired format
        $responseData = [
            'CompanyName' => isset($companyData['CompanyName']) ? $companyData['CompanyName'] : '',
            'BankAccount' => isset($companyData['BankAccount']) ? $companyData['BankAccount'] : '',
            'AutoRound' => isset($companyData['AutoRound']) ? $companyData['AutoRound'] : '0',
            'MinuStockBilling' => isset($companyData['MinuStockBilling']) ? $companyData['MinuStockBilling'] : '0',
            'SDate' => isset($companyData['SDate']) ? $companyData['SDate'] : date('Y-m-d'),
            'RegnNo' => isset($companyData['RegnNo']) ? $companyData['RegnNo'] : '',
            'Address' => isset($companyData['Address']) ? $companyData['Address'] : '',
            'Country' => isset($companyData['Country']) ? $companyData['Country'] : '',
            'State' => isset($companyData['State']) ? $companyData['State'] : '',
            'Dist' => isset($companyData['Dist']) ? $companyData['Dist'] : '',
            'Place' => isset($companyData['Place']) ? $companyData['Place'] : '',
            'PinCode' => isset($companyData['PinCode']) ? $companyData['PinCode'] : '',
            'TaxRule' => isset($companyData['TaxRule']) ? $companyData['TaxRule'] : '',
            'TaxIncluded' => isset($companyData['TaxIncluded']) ? $companyData['TaxIncluded'] : '0',
            'Currency' => isset($companyData['Currency']) ? $companyData['Currency'] : '',
            'Mobile' => isset($companyData['Mobile']) ? $companyData['Mobile'] : '',
            'Email' => isset($companyData['Email']) ? $companyData['Email'] : '',
            'Password' => isset($companyData['Password']) ? $companyData['Password'] : '',
            'Img' => isset($companyData['Img']) ? $companyData['Img'] : ''
        ];
        
        // Return response in the desired format
        $response = [
            'data' => json_encode($responseData)
        ];
        
        $this->output
            ->set_content_type('application/json')
            ->set_output(json_encode($response));
    }

    /**
     * ====================================================================
     * FIX FOR JSON_DECODE NULL ISSUE AT LINE 170
     * ====================================================================
     * 
     * If you have an existing Master.php file with the error at line 170,
     * find the problematic json_decode() call and replace it:
     * 
     * OLD CODE (causes error in PHP 8.1+):
     * $data = json_decode($jsonString, true);
     * 
     * FIXED CODE (use one of these methods):
     * 
     * Method 1: Use the helper method
     * $data = $this->safeJsonDecode($jsonString, true);
     * 
     * Method 2: Manual check
     * $data = null;
     * if (!empty($jsonString) && is_string($jsonString)) {
     *     $data = json_decode($jsonString, true);
     *     if (json_last_error() !== JSON_ERROR_NONE) {
     *         $data = null;
     *     }
     * }
     * 
     * ====================================================================
     */
    
    /**
     * Helper method to safely decode JSON
     * Use this method instead of json_decode() directly
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
}

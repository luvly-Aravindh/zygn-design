<?php
// ================================
// DEBUG (TURN OFF IN PRODUCTION)
// ================================
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Create log file
$log_file = 'mail_debug_' . date('Y-m-d') . '.log';
function writeLog($message) {
    global $log_file;
    $timestamp = date('Y-m-d H:i:s');
    file_put_contents($log_file, "[$timestamp] $message\n", FILE_APPEND);
}

writeLog("=== New form submission started ===");

// ================================
// CORS HEADERS
// ================================
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// ================================
// JSON RESPONSE FUNCTION
// ================================
function jsonResponse($status, $message, $redirect = '')
{
    header('Content-Type: application/json');
    echo json_encode([
        "status" => $status,
        "message" => $message,
        "redirect" => $redirect
    ]);
    exit;
}

// ================================
// GET JSON DATA FROM REACT
// ================================
$rawData = file_get_contents("php://input");
$data = json_decode($rawData, true);

if (json_last_error() === JSON_ERROR_NONE && is_array($data)) {
    $_POST = $data;
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    writeLog("Non-POST request attempted");
    jsonResponse(false, "Only POST requests allowed");
}

// ================================
// COLLECT DATA
// ================================
$full_name = trim($_POST["full_name"] ?? "");
$studio_name = trim($_POST["studio_name"] ?? "");
$email = trim($_POST["email"] ?? "");
$country_code = trim($_POST["country_code"] ?? "");
$mobile = trim($_POST["mobile"] ?? "");
$monthly_projects = trim($_POST["monthly_projects"] ?? "");
$project_details = trim($_POST["project_details"] ?? "");

$phone = $country_code . " " . $mobile;

writeLog("Form data received - Name: $full_name, Email: $email");

// ================================
// VALIDATION
// ================================
if (!$full_name || !$studio_name || !$email || !$mobile || !$country_code) {
    writeLog("Validation failed - missing required fields");
    jsonResponse(false, "Please fill all required fields");
}

// ================================
// BLOCK TEMP EMAILS
// ================================
$blocked_domains = [
    "mailinator.com",
    "guerrillamail.com",
    "10minutemail.com",
    "tempmail.com",
    "yopmail.com"
];

$emailDomain = strtolower(substr(strrchr($email, "@"), 1));

if (in_array($emailDomain, $blocked_domains)) {
    writeLog("Temporary email blocked: $emailDomain");
    jsonResponse(false, "Temporary emails not allowed");
}

// ================================
// PREVENT DUPLICATES
// ================================
$file = "submitted_emails.txt";

$emails = file_exists($file)
    ? file($file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES)
    : [];

foreach ($emails as $line) {
    $parts = explode(" | ", $line);
    if (strtolower(trim($parts[0])) === strtolower($email)) {
        writeLog("Duplicate email attempt: $email");
        jsonResponse(false, "Email already registered");
    }
}

// ================================
// SEND EMAIL USING ZEPTOMAIL API
// ================================
$email_sent = false;

// ── Load .env file (simple parser – no library needed) ──
$_envFile = __DIR__ . '/.env';
if (file_exists($_envFile)) {
    foreach (file($_envFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) as $_line) {
        if (str_starts_with(trim($_line), '#') || !str_contains($_line, '=')) continue;
        [$_key, $_val] = explode('=', $_line, 2);
        putenv(trim($_key) . '=' . trim($_val));
    }
}

// ZeptoMail Configuration (reads from .env or Docker env vars)
define('ZEPTO_TOKEN', getenv('MAIL_TOKEN') ?: '');
define('ZEPTO_URL',   getenv('MAIL_SERVER_URL') ?: 'https://api.zeptomail.in/v1.1/email');


/**
 * Send email via ZeptoMail API
 */
function sendZeptoMail($to_emails, $subject, $content, $is_html = false) {
    if (empty($to_emails)) return false;

    // Split multiple emails if comma separated
    $recipients = [];
    $email_array = explode(',', $to_emails);
    foreach ($email_array as $email) {
        $trimmed_email = trim($email);
        if (!empty($trimmed_email)) {
            $recipients[] = [
                "email_address" => [
                    "address" => $trimmed_email
                ]
            ];
        }
    }

    $payload = [
        "from" => [
            "address" => "admin@zygn.app",
            "name" => "Zygn Audit"
        ],
        "to" => $recipients,
        "subject" => $subject
    ];

    if ($is_html) {
        $payload["htmlbody"] = $content;
    } else {
        $payload["textbody"] = $content;
    }

    $ch = curl_init(ZEPTO_URL);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        "Authorization: " . ZEPTO_TOKEN,
        "Content-Type: application/json"
    ]);
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); // For local/production compatibility
    
    $response = curl_exec($ch);
    $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $error = curl_error($ch);
    curl_close($ch);

    if ($error) {
        writeLog("❌ ZeptoMail cURL Error: $error");
        return false;
    }

    $result = json_decode($response, true);
    if ($http_code >= 200 && $http_code < 300) {
        return true;
    } else {
        $error_msg = $result['error']['message'] ?? $response;
        writeLog("❌ ZeptoMail Error (HTTP $http_code): $error_msg");
        return false;
    }
}

// Prepare email content
$to = "info@ptgtech.in, sriethiraj@getnos.io";
$subject = "Zygn Audit Form Submission - " . date("Y-m-d H:i:s");
$message = "New Form Submission\n\n" .
          "Full Name: $full_name\n" .
          "Studio Name: $studio_name\n" .
          "Email: $email\n" .
          "Phone: $phone\n" .
          "No. of Employees: $monthly_projects\n" .
          "Project Details: $project_details\n\n" .
          "Date: " . date("Y-m-d H:i:s");

writeLog("Attempting to send email via ZeptoMail API...");

// Send notification to admin
if(sendZeptoMail($to, $subject, $message)) {
    $email_sent = true;
    writeLog("✅ Admin notification sent via ZeptoMail: $to");
    
    // Send confirmation to user
    $confirm_subject = "Thank you for contacting Zygn Audit";
    $confirm_message = "Dear $full_name,\n\n" .
                      "Thank you for reaching out to Zygn Audit. We have received your inquiry and will get back to you shortly.\n\n" .
                      "Here's a copy of your submission:\n" .
                      "Studio Name: $studio_name\n" .
                      "Phone: $phone\n" .
                      "No. of Employees: $monthly_projects\n" .
                      "Project Details: $project_details\n\n" .
                      "Best regards,\n" .
                      "Zygn Audit Team";
    
    sendZeptoMail($email, $confirm_subject, $confirm_message);
    writeLog("✅ Confirmation email sent to user: $email");
    
} else {
    writeLog("❌ ZeptoMail primary attempt failed");
}

// ================================
// SAVE EMAIL (Always save even if email fails)
// ================================
file_put_contents(
    $file,
    "$email | " . date("Y-m-d H:i:s") . " | Sent: " . ($email_sent ? 'Yes' : 'No') . "\n",
    FILE_APPEND | LOCK_EX
);
writeLog("Email saved to file: $email");

// ================================
// WEBHOOK
// ================================
$webhook_url = "https://backend.zygn.app/api/webhook/websiteIntegration/fbedf181-b094-45ab-bd6f-d7a491202894";
$auth_token = "a3e6201a4d842108f5f7a6b1280dbb29e8c86ab55d957df0bc028f7eaa0b8888e229b14f19efff422cff291dfecdde3b82300269f84dac1e237be821197d03c33aaaa1b0f7b7459512034b483f354b45a079d7f4a740651ec6fd55c7ee54b3537a0166b99f91768feb11113432c3ca47f65eb486ce72702ffed8e2860b14ffe7";

$payload = [
    "authToken" => $auth_token,
    "fieldData" => [
        ["name" => "email", "value" => $email],
        ["name" => "fullname", "value" => $full_name],
        ["name" => "contactNo", "value" => $phone],
        ["name" => "studioName", "value" => $studio_name],
        ["name" => "monthlyProjects", "value" => $monthly_projects],
        ["name" => "projectDetails", "value" => $project_details]
    ]
];

writeLog("Sending webhook to: $webhook_url");

$ch = curl_init($webhook_url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json'
]);
curl_setopt($ch, CURLOPT_TIMEOUT, 10);
curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 5);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);

$webhook_response = curl_exec($ch);
$curl_error = curl_error($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($curl_error) {
    writeLog("❌ Webhook cURL error: $curl_error");
} else {
    writeLog("✅ Webhook sent | HTTP $http_code | Response: $webhook_response");
}

// Save webhook result to separate file for easy debugging
file_put_contents(
    "webhook_debug.log",
    date("Y-m-d H:i:s") . " | HTTP: $http_code | cURL Error: $curl_error | Response: $webhook_response\n",
    FILE_APPEND
);

// ================================
// SEND SUCCESS RESPONSE
// ================================
writeLog("=== Form submission completed ===");

if ($email_sent) {
    writeLog("Returning success response to client");
    jsonResponse(
        true,
        "Form submitted successfully! Please check your email for confirmation.",
        "https://tidycal.com/marketingptgtech/30min-free-zygn-demo"
    );
} else {
    writeLog("Returning partial success response to client (email failed)");
    jsonResponse(
        true,
        "Form submitted successfully! (Notification may be delayed)",
        "https://tidycal.com/marketingptgtech/30min-free-zygn-demo"
    );
}
?>
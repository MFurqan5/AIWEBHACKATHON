<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Database connection
$conn = new mysqli("localhost", "root", "", "smart_pantry");

// Check connection
if ($conn->connect_error) {
    die("Error: Database connection failed - " . $conn->connect_error);
}

// Ensure only POST requests are allowed
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    die("Error: Only POST requests are allowed!");
}

// Check if all required fields are provided
if (!isset($_POST["name"]) || !isset($_POST["email"]) || !isset($_POST["password"])) {
    die("Error: Missing required fields!");
}

// Retrieve form data
$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$password = $_POST["password"];

// Validate empty fields
if (empty($name) || empty($email) || empty($password)) {
    die("Error: All fields are required!");
}

// Hash password
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

// Check if email already exists
$checkQuery = $conn->prepare("SELECT id FROM users WHERE email = ?");
$checkQuery->bind_param("s", $email);
$checkQuery->execute();
$checkQuery->store_result();

if ($checkQuery->num_rows > 0) {
    die("Error: Email already registered!");
}

// Insert user into database
$stmt = $conn->prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $name, $email, $hashedPassword);

if ($stmt->execute()) {
    echo "Registration successful!";
} else {
    echo "Error: " . $conn->error;
}

// Close connections
$stmt->close();
$checkQuery->close();
$conn->close();
?>

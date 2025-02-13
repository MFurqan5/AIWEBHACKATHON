<?php
$servername = "localhost";
$username = "root"; // Change if needed
$password = "";
$database = "smart_pantry";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle item addition
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $itemName = $_POST["itemName"];
    $quantity = $_POST["quantity"];
    $expiryDate = $_POST["expiryDate"];

    $sql = "INSERT INTO inventory (item_name, quantity, expiry_date) VALUES ('$itemName', '$quantity', '$expiryDate')";

    if ($conn->query($sql) === TRUE) {
        echo "Item added successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>

document.getElementById("joinForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let errorMessage = document.getElementById("error-message");

    errorMessage.textContent = ""; // Clear old error messages

    // Validation checks
    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        errorMessage.textContent = "All fields are required!";
        errorMessage.style.color = "red";
        return;
    }

    if (password.length < 6) {
        errorMessage.textContent = "Password must be at least 6 characters!";
        errorMessage.style.color = "red";
        return;
    }

    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match!";
        errorMessage.style.color = "red";
        return;
    }

    // Send data to join.php using fetch()
    fetch("join.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}&confirmPassword=${encodeURIComponent(confirmPassword)}`
    })
    .then(response => response.text())  // Convert response to text
    .then(data => {
        if (data.includes("successful")) {
            alert("Registration successful!");      
            document.getElementById("joinForm").reset(); // Clear the form
        } else {
            errorMessage.textContent = data; // Show PHP error
            errorMessage.style.color = "red";
        }
    })
    .catch(error => {
        console.error("Error:", error);
        errorMessage.textContent = "Something went wrong!";
        errorMessage.style.color = "red";
    });
});

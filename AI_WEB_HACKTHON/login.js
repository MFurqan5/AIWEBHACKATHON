document.addEventListener("DOMContentLoaded", function () {
    // Update footer year dynamically
    document.querySelector(".year").textContent = new Date().getFullYear();

    // Login form handling
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (email === "" || password === "") {
            alert("Please fill in all fields.");
            return;
        }

        // Dummy validation (replace this with actual backend authentication)
        if (email === "test@smartpantry.com" && password === "password123") {
            alert("Login Successful!");
            window.location.href = "index.html"; // Redirect to homepage after login
        } else {
            alert("Invalid email or password.");
        }
    });
});

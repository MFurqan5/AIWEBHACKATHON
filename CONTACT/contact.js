document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get input values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Simple validation
        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        // Show success message
        successMessage.classList.remove("hidden");

        // Clear form
        contactForm.reset();

        // Hide success message after 3 seconds
        setTimeout(() => {
            successMessage.classList.add("hidden");
        }, 3000);
    });
});

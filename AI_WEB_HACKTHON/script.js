document.addEventListener("DOMContentLoaded", function () {
    // Fade-in animations
    const sections = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => observer.observe(section));

    // Mobile menu toggle
    document.querySelector(".menu-toggle").addEventListener("click", function () {
        document.querySelector("nav ul").classList.toggle("active");
    });

    // Smooth Scroll Navigation
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function (e) {
            const targetHref = this.getAttribute("href");
            if (targetHref.startsWith("#")) { // Only prevent default for section links
                e.preventDefault();
                const targetId = targetHref.substring(1);
                document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
            }
        });
    });
    

    // Typing Effect
    const typedText = document.querySelector(".typing");
    const words = ["Your Personal Kitchen Assistant", "Manage Ingredients Smartly", "Reduce Food Waste"];
    let wordIndex = 0;
    let charIndex = 0;
    function typeEffect() {
        if (charIndex < words[wordIndex].length) {
            typedText.textContent += words[wordIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, 100);
        } else {
            setTimeout(eraseEffect, 2000);
        }
    }
    function eraseEffect() {
        if (charIndex > 0) {
            typedText.textContent = words[wordIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseEffect, 50);
        } else {
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeEffect, 500);
        }
    }
    typeEffect();

    // Back to Top Button
    const backToTop = document.createElement("button");
    backToTop.innerText = "↑";
    backToTop.classList.add("back-to-top");
    document.body.appendChild(backToTop);
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    });
    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Dark/Light Mode Toggle
    const themeToggle = document.createElement("button");
    themeToggle.innerText = "🌙";
    themeToggle.classList.add("theme-toggle");
    document.body.appendChild(themeToggle);
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        themeToggle.innerText = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
    });

    // Dynamic Footer Year
    document.querySelector(".year").textContent = new Date().getFullYear();
});

document.addEventListener("DOMContentLoaded", function () {
    animateSkillBars();
    setupDarkModeToggle();
    setupSocialHoverEffects();
});

function animateSkillBars() {
    document.querySelectorAll(".skill-level").forEach(skill => {
        let width = skill.style.width;
        skill.style.width = "0";
        setTimeout(() => {
            skill.style.transition = "width 1.5s ease-in-out";
            skill.style.width = width;
        }, 500);
    });
}

function setupDarkModeToggle() {
    const toggleButton = document.getElementById("darkModeToggle");
    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode"));
    });

    if (localStorage.getItem("dark-mode") === "true") {
        document.body.classList.add("dark-mode");
    }
}

function setupSocialHoverEffects() {
    document.querySelectorAll(".social-links a").forEach(link => {
        link.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.2)";
            this.style.transition = "transform 0.3s ease";
        });
        link.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
        });
    });
}
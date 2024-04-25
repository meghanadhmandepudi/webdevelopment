// Wait for the DOM content to be fully loaded before executing the JavaScript code
document.addEventListener("DOMContentLoaded", function() {
    // Select the navbar toggle button element
    const navbarToggle = document.querySelector(".navbar-toggler");
    // Select the navbar collapse element
    const navbarCollapse = document.querySelector("#collapsibleNavbar");

    navbarToggle.addEventListener("click", function() {
        navbarCollapse.classList.toggle("show");
    });
});

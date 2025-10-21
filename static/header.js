document.addEventListener("DOMContentLoaded", function() {
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-placeholder").innerHTML = data;

            // Re-run script logic for the dynamically loaded header
            const navBtn = document.getElementById('navToggle');
            const navMenu = document.getElementById('headerNav');
            if (navBtn && navMenu) {
                navBtn.addEventListener('click', function() {
                    navMenu.classList.toggle('open');
                });
            }

            // Add active class to current page in navigation
            const currentPage = window.location.pathname.split('/').pop() || 'index.html';
            const navLinks = document.querySelectorAll('.island-nav > li > a');
            navLinks.forEach(link => {
                const linkPage = link.getAttribute('href').split('/').pop();
                if (linkPage === currentPage) {
                    link.classList.add('active');
                }
            });
        });
});
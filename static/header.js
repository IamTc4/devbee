document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('navToggle');
    const headerNav = document.getElementById('headerNav');

    if (navToggle && headerNav) {
        navToggle.addEventListener('click', () => {
            headerNav.classList.toggle('open');
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Preloader
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        preloader.classList.add('hide');
    });
    // FAQ
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.icon');

        question.addEventListener('click', () => {
            const isOpen = answer.classList.toggle('open');
            icon.textContent = isOpen ? '−' : '+';
        });
    });

    // Scroll to top button
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    if (scrollToTopBtn) {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                scrollToTopBtn.style.display = 'block';
            } else {
                scrollToTopBtn.style.display = 'none';
            }
        });

        scrollToTopBtn.addEventListener('click', () => {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        });
    }
});
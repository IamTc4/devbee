document.addEventListener('DOMContentLoaded', () => {
    // Preloader
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        if (preloader) {
            preloader.classList.add('hide');
        }
    });

    // FAQ
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.icon');

        if (question && answer && icon) {
            question.addEventListener('click', () => {
                const isOpen = answer.classList.toggle('open');
                icon.textContent = isOpen ? '−' : '+';
            });
        }
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

    // Advanced Scrolling Effects
    const header = document.getElementById('mainHeader');
    const heroTitle = document.querySelector('.hero-title');
    const sections = document.querySelectorAll('section');

    const revealSection = () => {
        const windowHeight = window.innerHeight;
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < windowHeight - 150) {
                section.classList.add('reveal');
            }
        });
    };

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;

        // Sticky Header Effect
        if (header) {
            if (scrollPosition > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }

        // Parallax Effect for Hero Title
        if (heroTitle) {
            heroTitle.style.transform = `translateY(${scrollPosition * 0.1}px)`;
        }

        revealSection();
    });

    revealSection();
});

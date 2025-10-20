document.addEventListener('DOMContentLoaded', function() {
    const typedTextSpan = document.getElementById('typed-text');
    const textArray = ["Elevate Your Brand.", "Drive Innovation.", "Captivate Audiences.", "Deliver Results."];
    const typingDelay = 100; // Milliseconds per character
    const erasingDelay = 50; // Milliseconds per character
    const newTextDelay = 2000; // Delay before starting to type new text (in milliseconds)
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) {
                textArrayIndex = 0;
            }
            setTimeout(type, typingDelay + 1100); // Delay before typing new text
        }
    }

    // Start the animation
    if (textArray.length) setTimeout(type, newTextDelay + 250);

    // FAQ Accordion Functionality
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('.icon');

            // Close other open answers (optional, but good for UX)
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== question && otherQuestion.classList.contains('active')) {
                    otherQuestion.classList.remove('active');
                    otherQuestion.nextElementSibling.classList.remove('open');
                    otherQuestion.querySelector('.icon').textContent = '+';
                }
            });

            // Toggle the clicked FAQ item
            question.classList.toggle('active');
            answer.classList.toggle('open');
            if (question.classList.contains('active')) {
                icon.textContent = 'x'; // Change to 'x' when open
            } else {
                icon.textContent = '+'; // Change back to '+' when closed
            }
        });
    });

    // Service Card Toggle Functionality
    const serviceToggleBtns = document.querySelectorAll('.service-toggle-btn');

    serviceToggleBtns.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior
            const serviceCard = button.closest('.service-card');
            const serviceDetails = serviceCard.querySelector('.service-details');

            if (serviceDetails.classList.contains('open')) {
                serviceDetails.classList.remove('open');
                button.textContent = 'Learn More';
            } else {
                serviceDetails.classList.add('open');
                button.textContent = 'Show Less';
            }
        });
    });

    // Lightbox Functionality (for pages with #lightbox)
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.querySelector('.close-btn');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentImageIndex = 0;
    let galleryImages = [];

    const lightboxTriggers = document.querySelectorAll('.lightbox-trigger');

    if (lightboxTriggers.length > 0 && lightbox) {
        // Populate galleryImages only if triggers exist on the page
        galleryImages = Array.from(lightboxTriggers).map(trigger => ({
            src: trigger.querySelector('img').getAttribute('src'),
            alt: trigger.querySelector('img').getAttribute('alt')
        }));

        lightboxTriggers.forEach((trigger, index) => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                currentImageIndex = index;
                openLightbox(currentImageIndex);
            });
        });

        closeBtn.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });

        prevBtn.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex === 0) ? galleryImages.length - 1 : currentImageIndex - 1;
            openLightbox(currentImageIndex);
        });

        nextBtn.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex === galleryImages.length - 1) ? 0 : currentImageIndex + 1;
            openLightbox(currentImageIndex);
        });

        function openLightbox(index) {
            lightbox.style.display = "block";
            lightboxImg.src = galleryImages[index].src;
            lightboxCaption.textContent = galleryImages[index].alt;
        }

        function closeLightbox() {
            lightbox.style.display = "none";
        }

        // Also add scroll-to-top button functionality to portfolio.html
        const scrollToTopBtn = document.getElementById('scrollToTopBtn');
        if (scrollToTopBtn) {
            window.onscroll = function() {
                if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                    scrollToTopBtn.style.display = "block";
                } else {
                    scrollToTopBtn.style.display = "none";
                }
            };

            scrollToTopBtn.addEventListener('click', function() {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    }

    // Preloader Functionality
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            preloader.classList.add('hide');
            // Optional: Remove the preloader from the DOM after it fades out
            setTimeout(() => {
                preloader.remove();
            }, 600); // Matches the CSS transition duration
        });
    }

    // Smooth scrolling for service dropdown links
    const serviceDropdownLinks = document.querySelectorAll('.services-dropdown a');
    serviceDropdownLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.includes('#')) {
                e.preventDefault();
                const targetId = href.split('#')[1];
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Smooth scrolling for contact form navigation
    const contactFormLinks = document.querySelectorAll('a[href="#contact-form"]');
    contactFormLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetElement = document.getElementById('contact-form');
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Contact form submission
    const contactForm = document.querySelector('.bottom-contact-form .contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Basic validation
            if (!data.name || !data.email || !data.message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Simulate form submission (replace with actual backend integration)
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }

    // Add active class to current page in navigation
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}); 

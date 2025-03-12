// JavaScript for Spånga Basket Website

document.addEventListener('DOMContentLoaded', function() {
    // Add mobile navigation toggle functionality
    const createMobileNav = () => {
        const header = document.querySelector('header');
        const nav = document.querySelector('nav');
        
        // Create mobile menu button
        const mobileMenuBtn = document.createElement('button');
        mobileMenuBtn.classList.add('mobile-menu-btn');
        mobileMenuBtn.innerHTML = '&#9776;'; // hamburger icon
        mobileMenuBtn.setAttribute('aria-label', 'Toggle navigation menu');
        
        // Insert button before nav
        header.querySelector('.container').insertBefore(mobileMenuBtn, nav);
        
        // Add toggle functionality
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
            this.setAttribute('aria-expanded', nav.classList.contains('active'));
        });
    };
    
    // Only create mobile nav for smaller screens
    if (window.innerWidth <= 768) {
        createMobileNav();
    }
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add simple form validation for contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            let valid = true;
            
            // Get form fields
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            
            // Validate each field
            if (!name.value.trim()) {
                valid = false;
                name.classList.add('invalid');
            } else {
                name.classList.remove('invalid');
            }
            
            if (!email.value.trim() || !email.value.includes('@')) {
                valid = false;
                email.classList.add('invalid');
            } else {
                email.classList.remove('invalid');
            }
            
            if (!message.value.trim()) {
                valid = false;
                message.classList.add('invalid');
            } else {
                message.classList.remove('invalid');
            }
            
            // If valid, we would normally submit the form
            // For now just show a success message
            if (valid) {
                alert('Tack för ditt meddelande! Vi återkommer så snart som möjligt.');
                contactForm.reset();
            } else {
                alert('Vänligen fyll i alla obligatoriska fält korrekt.');
            }
        });
    }
});
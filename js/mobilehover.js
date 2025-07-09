document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('#main-nav .navigation-link');

    navLinks.forEach(link => {
        link.addEventListener('touchstart', function(event) {
            // Check if it's likely a mobile device based on screen width
            if (window.innerWidth <= 768) {
                // Apply the hover effect
                this.classList.add('mobile-hover-active');

                // Remove the hover effect after 1 second
                setTimeout(() => {
                    this.classList.remove('mobile-hover-active');
                }, 1000); // 1000 milliseconds = 1 second
            }
        });
    });
});

// Hamburger Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('#main-nav'); // Używamy bezpośrednio #main-nav
    const body = document.body;
    
    // Stwórz backdrop dynamicznie jeśli nie istnieje
    let backdrop = document.querySelector('.mobile-nav-backdrop');
    if (!backdrop) {
        backdrop = document.createElement('div');
        backdrop.className = 'mobile-nav-backdrop';
        document.body.appendChild(backdrop);
    }
    
    if (hamburger && mobileMenu) {
        // Toggle menu
        function toggleMenu() {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            backdrop.classList.toggle('active');
            body.classList.toggle('menu-open');
        }
        
        // Open/close menu
        hamburger.addEventListener('click', function(e) {
            e.preventDefault();
            toggleMenu();
        });
        
        backdrop.addEventListener('click', function(e) {
            e.preventDefault();
            toggleMenu();
        });
        
        // Close menu when clicking on links
        const mobileLinks = mobileMenu.querySelectorAll('.navigation-link');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                // Dodaj małe opóźnienie aby link zdążył się wykonać
                setTimeout(() => {
                    if (mobileMenu.classList.contains('active')) {
                        toggleMenu();
                    }
                }, 100);
            });
        });
        
        // Close menu on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
        
        // Close menu on window resize to desktop
        window.addEventListener('resize', function() {
            if (window.innerWidth >= 768 && mobileMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
                backdrop.classList.remove('active');
                body.classList.remove('menu-open');
            }
        });
    }
});
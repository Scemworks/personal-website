function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-nav');
    const menuButton = document.querySelector('.hamburger');
    const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
    
    menuButton.setAttribute('aria-expanded', !isExpanded);
    mobileMenu.classList.toggle('active');
}

// Close mobile menu when clicking outside

document.addEventListener('click', (event) => {
    const mobileMenu = document.querySelector('.mobile-nav');
    const menuButton = document.querySelector('.hamburger');
    
    if (!event.target.closest('.mobile-nav') && 
        !event.target.closest('.hamburger') && 
        mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        menuButton.setAttribute('aria-expanded', 'false');
    }
});

// Close mobile menu when window is resized above mobile breakpoint
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        const mobileMenu = document.querySelector('.mobile-nav');
        const menuButton = document.querySelector('.hamburger');
        
        mobileMenu.classList.remove('active');
        menuButton.setAttribute('aria-expanded', 'false');
    }
});
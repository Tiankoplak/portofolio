'use strict';

const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');

const closeMobileMenu = () => {
    if (!menuButton || !mobileMenu) return;

    mobileMenu.classList.remove('mobile-menu-open');
    menuButton.setAttribute('aria-expanded', 'false');
};

const openMobileMenu = () => {
    if (!menuButton || !mobileMenu) return;

    mobileMenu.classList.add('mobile-menu-open');
    menuButton.setAttribute('aria-expanded', 'true');
};

if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
        const isOpen = menuButton.getAttribute('aria-expanded') === 'true';

        if (isOpen) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });

    mobileMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', closeMobileMenu);
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeMobileMenu();
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            closeMobileMenu();
        }
    });
}

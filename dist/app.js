// Portfolio TS
const app = () => {
    // Navigation DOM Elements
    // --- Desktop
    const aboutLink = document.querySelector('.about-link');
    const projectsLink = document.querySelector('.projects-link');
    const contactLink = document.querySelector('.contact-link');
    // --- Mobile
    const burgerIcon = document.querySelector('.hamburger-icon');
    const aboutLinkMobile = document.querySelector('.mobile-menu .about');
    const projectsLinkMobile = document.querySelector('.mobile-menu .projects');
    const contactLinkMobile = document.querySelector('.mobile-menu .contact');
    // -- array of all links in mobile menu
    const allMobileLinks = [...document.querySelectorAll('.mobile-menu *:not(.fa-xmark)')];
    // Card DOM Elements
    const aboutCard = document.querySelector('.about-card');
    const aboutExit = document.querySelector('.about-exit');
    const projectsCard = document.querySelector('.project-card');
    const projectsExit = document.querySelector('.projects-exit');
    const contactCard = document.querySelector('.contact-card');
    const contactExit = document.querySelector('.contact-exit');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuExit = document.querySelector('.mobile-menu .fa-xmark');
    // About Card Events
    aboutLink.addEventListener('click', (e) => {
        setTimeout(() => {
            aboutCard.style.display = 'initial';
        }, 175);
    });
    aboutExit.addEventListener('click', (e) => {
        aboutCard.style.display = 'none';
    });
    // Projects Card Events
    projectsLink.addEventListener('click', (e) => {
        setTimeout(() => {
            projectsCard.style.display = 'initial';
        }, 175);
    });
    projectsExit.addEventListener('click', (e) => {
        projectsCard.style.display = 'none';
    });
    // Contact Card Events
    contactLink.addEventListener('click', (e) => {
        setTimeout(() => {
            contactCard.style.display = 'initial';
        }, 175);
    });
    contactExit.addEventListener('click', (e) => {
        contactCard.style.display = 'none';
    });
    // Mobile Nav Events
    burgerIcon.addEventListener('click', (e) => {
        mobileMenu.classList.add('showing');
    });
    mobileMenuExit.addEventListener('click', (e) => {
        mobileMenu.classList.remove('showing');
    });
    aboutLinkMobile.addEventListener('click', (e) => {
        aboutCard.style.display = 'initial';
    });
    projectsLinkMobile.addEventListener('click', (e) => {
        projectsCard.style.display = 'initial';
    });
    contactLinkMobile.addEventListener('click', (e) => {
        contactCard.style.display = 'initial';
    });
    // -- close mobile menu when clicking a link
    allMobileLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            mobileMenu.classList.remove('showing');
        });
    });
};
app();
export {};
//# sourceMappingURL=app.js.map
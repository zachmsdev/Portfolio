
// Portfolio TS

const app = (): void => {

    // Navigation DOM Elements
    // --- Desktop
    const aboutLink = document.querySelector<HTMLElement>('.about-link')!;
    const projectsLink = document.querySelector<HTMLElement>('.projects-link')!;
    const contactLink = document.querySelector<HTMLElement>('.contact-link')!;
    // --- Mobile
    const burgerIcon = document.querySelector<HTMLElement>('.hamburger-icon')!;
    const aboutLinkMobile = document.querySelector<HTMLElement>('.mobile-menu .about')!;
    const projectsLinkMobile = document.querySelector<HTMLElement>('.mobile-menu .projects')!;
    const contactLinkMobile = document.querySelector<HTMLElement>('.mobile-menu .contact')!;
    const mobileMenu = document.querySelector<HTMLElement>('.mobile-menu')!;
    const mobileMenuExit = document.querySelector<HTMLElement>('.mobile-menu .fa-xmark')!;
    // -- array of all links in mobile menu
    const allMobileLinks: HTMLElement[] = [...document.querySelectorAll<HTMLElement>('.mobile-menu *:not(.fa-xmark)')];

    // Card DOM Elements
    const aboutCard = document.querySelector<HTMLElement>('.about-card')!;
    const aboutExit = document.querySelector<HTMLElement>('.about-exit')!;
    const projectsCard = document.querySelector<HTMLElement>('.project-card')!;
    const projectsExit = document.querySelector<HTMLElement>('.projects-exit')!;
    const contactCard = document.querySelector<HTMLElement>('.contact-card')!;
    const contactExit = document.querySelector<HTMLElement>('.contact-exit')!;

    // About Card Events
    aboutLink.addEventListener('click', (e: Event) => {
        setTimeout(() => {
            aboutCard.style.display = 'initial';
        }, 175);
    });
    aboutExit.addEventListener('click', (e: Event) => {
        aboutCard.style.display = 'none';
    })

    // Projects Card Events
    projectsLink.addEventListener('click', (e: Event) => {
        setTimeout(() => {
            projectsCard.style.display = 'initial';
        }, 175);
    });
    projectsExit.addEventListener('click', (e: Event) => {
        projectsCard.style.display = 'none';
    })

    // Contact Card Events
    contactLink.addEventListener('click', (e: Event) => {
        setTimeout(() => {
            contactCard.style.display = 'initial';
        }, 175);
    });
    contactExit.addEventListener('click', (e: Event) => {
        contactCard.style.display = 'none';
    })

    // Mobile Nav Events
    burgerIcon.addEventListener('click', (e: Event) => {
        mobileMenu.classList.add('showing');
    });
    mobileMenuExit.addEventListener('click', (e: Event) => {
        mobileMenu.classList.remove('showing');
    });
    aboutLinkMobile.addEventListener('click', (e: Event) => {
        aboutCard.style.display = 'initial';
    });
    projectsLinkMobile.addEventListener('click', (e: Event) => {
        projectsCard.style.display = 'initial';
    });
    contactLinkMobile.addEventListener('click', (e: Event) => {
        contactCard.style.display = 'initial';
    });
    // -- close mobile menu when clicking a link
    allMobileLinks.forEach(link => {
        link.addEventListener('click', (e: Event) => {
            mobileMenu.classList.remove('showing');
        });
    });

}

app();





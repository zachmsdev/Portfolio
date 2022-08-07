
// Portfolio.js

const mobileMenu = () => {
    
    // Variables
    const burgerIcon = document.querySelector('.burgerIcon');
    const mobileMenu = document.querySelector('.mobileMenu');
    const mobileMenuOverlay = document.querySelector('.menuOverlay');
 
    // Functions
    const openMobile = () => {
        mobileMenu.classList.add('active');
        mobileMenuOverlay.classList.add('active');
    }

    const closeMobile = () => {
        mobileMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
    }

    // Events
    burgerIcon.addEventListener('click', openMobile);
    mobileMenuOverlay.addEventListener('click', closeMobile);
}

const monitor = () => {

    // using session storage to make sure start screen only runs once
    if (sessionStorage.getItem('websiteState') === 'active') return;

    const monitorSettings = () => {

        // Variables
        const startScreen = document.querySelector('.startScreen');
        const enterButton = document.querySelector('.screen3 > button');
        const powerButton = document.querySelector('.powerButton');
        const closeScreenTop = document.querySelector('.shutdownScreenT');
        const closeScreenBottom = document.querySelector('.shutdownScreenB');
        startScreen.style.display = 'grid';
        document.querySelector('.homePage').style.overflowY = 'hidden';

        // Functions
        const hideStartScreen = (e) => {
            startScreen.style.display = 'none';
            document.querySelector('.homePage').style.overflowY = 'initial';
            sessionStorage.setItem('websiteState', 'active');
        }

        const shutdown = () => {
            closeScreenTop.classList.toggle('show');
            closeScreenBottom.classList.toggle('show');
        }

        // Events
        enterButton.addEventListener('click', hideStartScreen);
        powerButton.addEventListener('click', shutdown);
    }

    monitorSettings();

}

const tabHighlight = () => {

    // change active tab on header navigation
    let URL = this.location.href;
    const arrayOfLinks = [...document.querySelectorAll('header ul > li')];

    if (URL.includes('contact')) {
        arrayOfLinks[2].classList.add('active');
        
    } else if (URL.includes('projects')) {
        arrayOfLinks[1].classList.add('active');
    } else {
        arrayOfLinks[0].classList.add('active');
    }

}

const portfolio = () => {
    tabHighlight();
    mobileMenu();
    monitor();
}

portfolio();


// Portfolio JS

const burgerIcon = document.querySelector('.burgerIcon');
const mobileMenu = document.querySelector('.mobileMenu');
const mobileMenuOverlay = document.querySelector('.menuOverlay');

const openMobile = () => {
    mobileMenu.classList.add('active');
    mobileMenuOverlay.classList.add('active');
}

const closeMobile = () => {
    mobileMenu.classList.remove('active');
    mobileMenuOverlay.classList.remove('active');
}


burgerIcon.addEventListener('click', openMobile);
mobileMenuOverlay.addEventListener('click', closeMobile);



/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// Menu Show 
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// Menu Hidden
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav-link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));



/*=============== ADD BLUR HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header');

    this.scrollY >= 50 ? header.classList.add('scroll-header')
                       : header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader)



/*=============== SWIPER FAVORITES ===============*/
let swiperFavorite = new Swiper('.favorite-swiper', {
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
    grabCursor: true,

    breakpoints: {
        768: {
            slidesPerView: 3,
        }
    }
});



// =================== FOOTER YEAR ====================
const currentYear = new Date().getFullYear();
const year = document.getElementById('current-year');
year.innerText = currentYear;



/*=============== SHOW SCROLL UP ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home-social, .favorite-container, .sponsor-container, .footer, .home-content-left, .all-reviews`)
sr.reveal(`.home-title span:nth-child(1)`, {origin: 'left', opacity: 1})
sr.reveal(`.home-title span:nth-child(3)`, {origin: 'right', opacity: 1})
sr.reveal(`.home-tooltip, .home-button, .model-button, .home-content-right, .about-features`, {origin: 'bottom'})
sr.reveal(`.about-data, .about-sec-data, .contact-content`, {origin: 'left'})
sr.reveal(`.about-img, .model-tooltip, .about-sec-img, .contact-form`, { origin: 'right' })
sr.reveal(`.product`, {interval: 100 })
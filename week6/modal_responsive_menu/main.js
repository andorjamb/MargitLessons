
const body = document.querySelector('body');
let links = document.querySelectorAll('nav ul li a');
const nav = document.querySelector('nav');
const backToTop = document.getElementById("backToTop");
const header = document.querySelector("header");
const menuIcon = document.getElementById('menuIcon');
const doNotClick = document.getElementById("doNotClick");
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');


/*   FUNCTIONS  (from Margit's example) */

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add('scroll');
        menuIcon.classList.add('scroll');
        backToTop.style.display = 'block'; /*works more reliably than the visibility property*/
    } else {
        header.classList.remove('scroll');
        menuIcon.classList.remove('scroll');
        backToTop.style.display = 'none';
    }
}

function mobileMenu() {
    console.log('clicked');
    for (const link of links) {
        link.addEventListener('click', mobileMenu);
    }
    if (nav.classList.contains('responsive')) {
        nav.classList.remove('responsive');
        document.body.style.overflow = '';
    } else {
        nav.classList.add('responsive');
        document.body.style.overflow = 'hidden';
    }
};


/*  */


backToTop.addEventListener('click', function () { window.scroll(0, 0) }); /* or window.scrollTop = 0 */

window.onscroll = function () {
    scrollFunction();
};

menuIcon.addEventListener('click', mobileMenu);

doNotClick.addEventListener('click', function () {
    if (!(overlay.classList.contains('visible'))) {
        overlay.classList.add('visible');
        modal.classList.add('visible');
        close.classList.add('visible');
    }
})

close.addEventListener('click', function () {
    overlay.classList.remove('visible');
    body.classList.remove('scroll');
})




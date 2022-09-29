
const body = document.querySelector('body');
const navbar = document.querySelector('nav');
const backToTop = document.getElementById("backToTop");
const header = document.querySelector("header");
const menuIcon = document.getElementById('menuIcon');
const doNotClick = document.getElementById("doNotClick");
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');

backToTop.addEventListener('click', function () { window.scroll(0, 0) }); /* or window.scrollTop = 0 */

window.onscroll = function () {
    scrollFunction();
};

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

/* responsive navbar menu button toggle */

menuIcon.addEventListener('click', function () {
    if (navbar.classList.contains('responsive')) {
        navbar.classList.remove('responsive');
        document.body.style.overflow = '';
    } else {
        navbar.classList.add('responsive');
        document.body.style.overflow = 'hidden';
    }
})





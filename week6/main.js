

const slidingMenu = document.getElementById("slidingMenu");
const navbar = document.querySelector('nav');
const backToTop = document.getElementById("backToTop");
const header = document.querySelector("header");
const menuIcon = document.getElementById('menuIcon');
header.addEventListener('scroll', function () { header.classList.toggle("") })
backToTop.addEventListener('click', function () { window.scroll(0, 0) }); /* or window.scrollTop = 0 */

//scrollTop built-in property

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

const doNotClick = document.getElementById("doNotClick");
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');
doNotClick.addEventListener('click', function () {
    overlay.style.display = 'flex';
    modal.style.display = 'block';
    close.style.display = 'block';
    /*disable scroll*/
})

/* responsive class toggle */

menuIcon.addEventListener('click', function () {
    if (navbar.classList.contains('responsive')) {
        navbar.classList.remove('responsive');
        document.body.style.overflow = '';
    } else {
        navbar.classList.add('responsive');
        document.body.style.overflow = 'hidden';
    }
})

/* modal element toggle */
doNotClick.addEventListener('click', function () {
    modal.style.display = "visible"
})

close.addEventListener('click', function () {
    console.log('clicked');
    overlay.style.display = "none";
    modal.style.display = "none";
})

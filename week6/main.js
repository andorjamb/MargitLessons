

const slidingMenu = document.getElementByClassName("slidingMenu");
const backToTop = document.getElementById("backToTop");
const header = document.querySelector("header");
header.addEventListener('scroll', function () { header.classList.toggle("") })
backToTop.addEventListener('click', function () { window.scroll(0, 0) });


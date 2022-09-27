/*  GLOBAL OBJECTS AND VARIABLES */

const colors = document.querySelectorAll(".colors");
let color1 = document.querySelector("#color1").value;
let color2 = document.querySelector("#color2").value;
const arrows = document.querySelectorAll(".arrow-radio");
const cssCode = document.getElementById("cssCode");
let direction = 0;
const copy = document.getElementById("copy");

/*  SUBFUNCTIONS */

function updateDirection(value) {
  direction = Number(value);
  document.querySelector(
    "body"
  ).style.backgroundImage = `linear-gradient(${direction}deg, ${color1}, ${color2})`;
  cssCode.textContent = document.querySelector("body").style.backgroundImage;
}

function updateColors() {
  color1 = document.querySelector("#color1").value;
  color2 = document.querySelector("#color2").value;
  document.querySelector(
    "body"
  ).style.backgroundImage = `linear-gradient(${Number(
    0
  )}deg, ${color1}, ${color2})`;
  cssCode.textContent = document.querySelector("body").style.backgroundImage;
}

/*  MAIN FUNCTION */

function main() {
  arrows.forEach((arrow) =>
    arrow.addEventListener("change", function () {
      updateDirection(arrow.id);
    })
  );

  colors.forEach((color) =>
    color.addEventListener("change", function () {
      updateColors();
    })
  );

  copy.addEventListener("click", function () {
    navigator.clipboard.writeText(cssCode.textContent);
  });
}

window.onload = main();

/*  GLOBAL OBJECTS AND VARIABLES */

const colors = document.querySelectorAll(".colors");
let color1 = document.querySelector("#color1").value;
let color2 = document.querySelector("#color2").value;
const arrows = document.querySelectorAll(".arrow-radio");
let direction = 0;

/*  SUBFUNCTIONS */

function updateDirection(value) {
  /* WORKING */
  direction = Number(value);
  document.querySelector(
    "body"
  ).style.backgroundImage = `linear-gradient(${direction}deg, ${color1}, ${color2})`;
}

function updateColors() {
  color1 = document.querySelector("#color1").value;
  color2 = document.querySelector("#color2").value;
  document.querySelector(
    "body"
  ).style.backgroundImage = `linear-gradient(${Number(
    0
  )}deg, ${color1}, ${color2})`;
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
      console.log("logging color on change", color.value);
      updateColors();
    })
  );
}

window.onload = main();

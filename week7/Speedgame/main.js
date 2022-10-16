/* ///////   DOCUMENT OBJECTS     //////////// */

const startButton = document.querySelector("#startButton");
const stopButton = document.querySelector("#stopButton");
const scoreDisplay = document.getElementById("scoreDisplay");
const circles = document.querySelectorAll(".circle");
const close = document.querySelector(".close");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const gameOverText = document.querySelector("#gameOverText");
const finalScoreText = document.querySelector("#finalScoreText");
const defaultBG = 'url("assets/images/planet1.png")';
const zap = new Audio("./assets/audio/zap_c_07-82067.mp3");
const endMusic = new Audio("./assets/audio/2018-08-01-30015.mp3");
let gameRunning = false;

/* ////////////  GLOBAL VARIABLES //////////  */
let score = 0;
let activeIndex = Math.floor(Math.random() * 4);
let alienTimeout;
let timer = 1800;

/* ////////////  FUNCTION DEFINITIONS //////////  */

function activateAlien() {
  /*randomly selects active circle and 
applies alien background, initiates timeout */
  newRandomIndex().then(() => {
    for (let i = 0; i < circles.length; i++) {
      setBG(i);
    }
  });
  alienTimeout = setTimeout(activateAlien, timer);
  gameRunning = true;
}

async function newRandomIndex() {
  let rand = Math.floor(Math.random() * 4);
  if (!(rand === activeIndex)) {
    activeIndex = rand;
    return activeIndex;
  } else newRandomIndex();
}

function setBG(index) {
  /** sets background image for circles */
  if (index == activeIndex) {
    circles[activeIndex].style.backgroundImage = getImage();
  } else {
    circles[index].style.backgroundImage = defaultBG;
  }
}

function checkClick() {
  circles[activeIndex].addEventListener("click", () => {
    return true;
  });
}

function stopGame() {
  console.log("game ended.");
  gameRunning = false;
  clearTimeout(alienTimeout);
  circles.forEach((circle) => {
    circle.style.backgroundImage = defaultBG;
    circle.style.pointerEvents = "none";
  });

  stopButton.style.display = "none";
  startButton.style.display = "block";
  finalScore(score);
  showModal();
}

function finalScore(score) {
  gameOverText.textContent = `Your score is: ${score}.`;
  if (score > 20) {
    finalScoreText.textContent = `Wowzers, you're amazing`;
    endMusic.play();
  } else if (score > 10) {
    finalScoreText.textContent = `Pretty good, for an amateur`;
  } else {
    finalScoreText.textContent = `Honestly? Terrible.`;
  }
}

function getImage() {
  let imageURLroot = 'url("assets/images/planet1_alien';
  imageURL = imageURLroot + Math.ceil(Math.random() * 4).toString() + '.png")';
  console.log(imageURL);
  return imageURL;
}

function showModal() {
  /* modal menu at game end */
  if (!overlay.classList.contains("visible")) {
    const close = document.querySelector(".close");
    overlay.classList.add("visible");
    modal.classList.add("visible");
    close.classList.add("visible");
  }
}

function runGame() {
  console.log("game started");
  score = 0;
  circles.forEach((circle) => {
    circle.style.pointerEvents = "auto";
  });
  scoreDisplay.textContent = `Your score: ${score}`;
  startButton.style.display = "none";
  stopButton.style.display = "block";
  activateAlien();
}

/* //////////////  Event listeners   /////////////// */

console.log(gameRunning);
startButton.addEventListener("click", runGame);
stopButton.addEventListener("click", stopGame);
close.addEventListener("click", function () {
  overlay.classList.remove("visible");
  if (endMusic.play()) {
    endMusic.pause();
    endMusic.currentTime = 0;
  }
});

for (let i = 0; i < circles.length; i++) {
  circles[i].addEventListener("click", () => {
    zap.play();

    if (!(circles[i] == circles[activeIndex])) {
      clearTimeout(alienTimeout);
      scoreDisplay.textContent = `Your score: ${score}`;
      stopGame();
    } else {
      score = score + 1;
      circles[i].classList.add("zoom-out");
      circles[i].backgroundImage = defaultBG;
      scoreDisplay.textContent = `Your score: ${score}`;
      if (score != 0 && score % 4 == 0) {
        timer -= 200;
        console.log("decreasing interval to", timer);
      }
    }
  });
}

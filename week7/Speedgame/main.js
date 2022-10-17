/* ///////   DOCUMENT OBJECTS     //////////// */

const startButton = document.querySelector("#startButton");
const stopButton = document.querySelector("#stopButton");
const scoreDisplay = document.getElementById("scoreDisplay");
const circles = document.querySelectorAll(".circle");
const aliens = document.querySelectorAll(".alien");
const close = document.querySelector(".close");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const gameOverText = document.querySelector("#gameOverText");
const finalScoreText = document.querySelector("#finalScoreText");
const defaultBG = 'url("assets/images/planet1.png")';
const zap = new Audio("./assets/audio/zap_c_07-82067.mp3");
const endMusic = new Audio("./assets/audio/2018-08-01-30015.mp3");

/* ////////////  GLOBAL VARIABLES //////////  */
let score = 0;
let activeIndex = Math.floor(Math.random() * 4);
let alienTimeout;
let timer;
let missedAliens = 0;

/* ////////////  FUNCTION DEFINITIONS //////////  */

function activateAlien() {
    /*randomly selects active circle and 
  applies alien background, initiates timeout */
    timer = 1800;
    newRandomIndex().then(() => {
        for (let i = 0; i < circles.length; i++) {
            setBG(i);
        }
    });
    alienTimeout = setTimeout(activateAlien, timer);
    missedAliens++;
    console.log(missedAliens);
    if (missedAliens == 2) {
        stopGame();
    }
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
        aliens[index].style.display = "inline-block";
        aliens[activeIndex].style.backgroundImage = getImage();
    } else {
        circles[index].style.backgroundImage = defaultBG;
        aliens[index].style.display = "none";
    }
}

function stopGame() {
    console.log("game ended.");
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
    missedAliens = 0;
    circles.forEach((circle) => {
        circle.style.pointerEvents = "auto";
    });
    scoreDisplay.textContent = `Your score: ${score}`;
    startButton.style.display = "none";
    stopButton.style.display = "block";
    activateAlien();
}

/* //////////////  Event listeners   /////////////// */

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
    circles[i].addEventListener("click", (event) => {
        zap.play();
        if (!(i == activeIndex)) {
            clearTimeout(alienTimeout);
            stopGame();
        }
        else {
            missedAliens--;
            console.log(missedAliens);
            score = score + 1;
            if (score != 0 && score % 4 == 0) {
                timer -= 200;
                console.log("decreasing interval to", timer);
            }
        }
        scoreDisplay.textContent = `Your score: ${score}`;

    });
} 

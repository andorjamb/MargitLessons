/* ///////   DOCUMENT OBJECTS     //////////// */

const startButton = document.querySelector("#startButton");
const stopButton = document.querySelector("#stopButton");
const scoreDisplay = document.getElementById('scoreDisplay');
const circles = document.querySelectorAll(".circle");
const active = document.querySelector(".active");
const close = document.querySelector('.close');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const gameOverText = document.querySelector("#gameOverText");
const finalScoreText = document.querySelector("#finalScoreText");

/* ////////////  GLOBAL VARIABLES //////////  */
let score = 0;
let newCurrent;
let current = generateRandom();
const interval = 1500;
let alienTimeout;

/* ////////////  FUNCTION DEFINITIONS //////////  */

function startGame() {
    console.log('game started');
    setTimeout(activateAlien, 1500);
}

function finalScore(score) {
    gameOverText.textContent = `Your score is: ${score}.`;
    if (score > 20) { finalScoreText.textContent = `Wowzers, you're amazing, and wayyy better at this than Margit`; }
    else if (score > 10) { finalScoreText.textContent = `Pretty good, for an amateur`; }
    else { finalScoreText.textContent = `Man you suck.`; }
}

function makeRandom() {
    newCurrent = generateRandom();
    if (newCurrent != current) {
        current = newCurrent;
        return current;
    }
    else { generateRandom() }
}

function stopGame() {
    console.log('game ended.');
    clearTimeout(alienTimeout);
    finalScore(score);
    showModal();
}

function showScore(index) {
    score++;
    scoreDisplay.textContent = `Your score: ${score}`;
    return score;
}

function generateRandom() {
    newRandom = Math.floor(Math.random() * 4);
    return newRandom;
}

function getImage() {
    console.log(circles[current]);
    console.log(circles[current].style.backgroundImage);
    const image1 = "url('./assets/images/planet1_alien1.png')";
    const image2 = "url('./assets/images/planet1_alien2.png')";
    const image3 = "url('./assets/images/planet1_alien3.png')";
    const image4 = "url('./assets/images/planet1_alien4.png')";
    const imageArray = [image1, image2, image3, image4];
    return imageArray[generateRandom()];
}

function activateAlien() { //the main game function
    circles[current].style.backgroundImage = "url('./assets/images/planet1.png')";
    current = makeRandom();
    circles[current].style.backgroundImage = getImage();
    circles.forEach((node, index) => {
        node.addEventListener('click', () => {
            if (!(node === circles[current])) {
                stopGame();
            }
            else {
                showScore(index); //gets current score
                return score; //being returned from nested function
            }
        })
    })
    if ((score != 0) && (score % 5 == 0)) { interval = interval - 100 };
    alienTimeout = setTimeout(activateAlien, interval);
    return current;
}


/* modal menu function */

function showModal() {
    const close = document.querySelector('.close');
    if (!(overlay.classList.contains('visible'))) {
        const close = document.querySelector('.close');
        overlay.classList.add('visible');
        modal.classList.add('visible');
        close.classList.add('visible');
    }
}

/* //////////////  Event listeners   /////////////// */

startButton.addEventListener('click', startGame);
stopButton.addEventListener('click', stopGame);
close.addEventListener('click', function () {
    overlay.classList.remove('visible');

})
/*
BUGS:

alien background image not working

*/
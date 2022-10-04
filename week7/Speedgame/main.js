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
let seed;
let lastSeed = generateRandom();
const interval = 1500;
let divInPlay;

/* ////////////  FUNCTION DEFINITIONS //////////  */

function startGame() {
    console.log('game started');
    setTimeout(activateAlien, 1500);
}

function finalScore(score) {
    gameOverText.textContent = `Your score is: ${score}.`;
    if (score > 20) { finalScoreText.textContent = `Wowzers, you're amazing`; }
    else if (score > 10) { finalScoreText.textContent = `Pretty good, for an amateur`; }
    else { finalScoreText.textContent = `Man you suck.`; }
}

function makeRandom() {
    seed = generateRandom();
    if (seed != lastSeed) {
        lastSeed = seed;
        return seed;
    }
    else { generateRandom() }
}
function stopGame() {
    console.log('game ended.');
    finalScore(score);
    showModal();
}

function activateAlien() {
    //divInPlay.style.backgroundImage = "url(./assets/images/planet1.png)";
    let divInPlay = circles[makeRandom()];
    console.log(divInPlay);
    divInPlay.style.backgroundImage = getImage();
    console.log(divInPlay.style.backgroundImage);
    const alienTimeout = setTimeout(activateAlien, interval);
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
    const image1 = "url(./assets/images/planet1_alien1.png)";
    const image2 = "url(./assets/images/planet1_alien2.png)";
    const image3 = "url(./assets/images/planet1_alien3.png)";
    const image4 = "url(./assets/images/planet1_alien4.png)";
    const imageArray = [image1, image2, image3, image4];
    return imageArray[generateRandom()];
}

/* modal menu and close button functions */

function showModal() {
    const close = document.querySelector('.close');
    if (!(overlay.classList.contains('visible'))) {
        const close = document.querySelector('.close');
        overlay.classList.add('visible');
        modal.classList.add('visible');
        close.classList.add('visible');
    }
}

close.addEventListener('click', function () {
    overlay.classList.remove('visible');

})

/* //////////////  Program execution  and event listeners   /////////////// */
console.log('print last seed variable: ', lastSeed);

startButton.addEventListener('click', startGame);
stopButton.addEventListener('click', stopGame);

circles.forEach((node, index) => {
    node.addEventListener('click', () => {
        if (!(node === divInPlay)) {
            stopGame();
        }
        else {
            showScore(index); //gets current score
            return score; //already being returned from inner function
        }
    })
})

/* Pseudocode notes 

each time new random number generated this value is passed to function that changes class of selected div

*/
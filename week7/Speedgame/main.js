/* ///////   DOCUMENT OBJECTS     //////////// */

const startButton = document.querySelector("#startButton");
const stopButton = document.querySelector("#stopButton");
const scoreDisplay = document.getElementById('scoreDisplay');
const circle = document.querySelectorAll(".circle");
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

/* ////////////  FUNCTION DEFINITIONS //////////  */

function startGame() {
    console.log('game started');
    seed = makeRandom();
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

function alien() {
    let divInPlay = circle[makeRandom()];
    console.log(divInPlay);
    divInPlay.style.backgroundImage = getImage();
}

circle.forEach((node, index) => {
    node.addEventListener('click', () => {
        showIndex(index);
        console.log('score is: ', score);
        return score;

    });
})

function showIndex(index) {
    console.log('clicked on circle', index);
    score++;
    scoreDisplay.textContent = `Your score: ${score}`;
    return score;
}

function generateRandom() {
    newRandom = Math.floor(Math.random() * 4);
    console.log(newRandom);
    return newRandom;
}

function getImage() {

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



/* Pseudocode notes 



each time new random number generated this value is passed to function that changes class of selected div

*/
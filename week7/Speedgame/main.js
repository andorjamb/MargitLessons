/* ///////   DOCUMENT OBJECTS     //////////// */

const startButton = document.querySelector("#startButton");
const stopButton = document.querySelector("#stopButton");
const scoreDisplay = document.getElementById('scoreDisplay');
const circles = document.querySelectorAll(".circle");
const close = document.querySelector('.close');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const gameOverText = document.querySelector("#gameOverText");
const finalScoreText = document.querySelector("#finalScoreText");

/* ////////////  GLOBAL VARIABLES //////////  */
let score = 0;
let active;
let alienTimeout;
let stopwatch = 1500;

/* ////////////  FUNCTION DEFINITIONS //////////  */


function activateAlien() {  //randomly selects active circle and applies alien background, initiates timeout
    console.log('activating alien');
    active = circles[newRandom()]; //global
    console.log('active circle: ', active);
    /*     circles[active].style.backgroundImage = getImage(); */
    for (const circle in circles) {
        if (circle == active) {
            console.log('logging active circle: ', active);
            active.style.backgroundImage = 'url("assets/images/planet1_alien4.png")';

        }
    }
    alienTimeout = setTimeout(activateAlien, stopwatch);
}

function finalScore(score) {
    gameOverText.textContent = `Your score is: ${score}.`;
    if (score > 20) { finalScoreText.textContent = `Wowzers, you're amazing`; }
    else if (score > 10) { finalScoreText.textContent = `Pretty good, for an amateur`; }
    else { finalScoreText.textContent = `Honestly? Terrible.`; }
}

function generateRandom() {
    let rand = Math.floor(Math.random() * 4);
    return rand;
}

function newRandom() { /* prevents repeated numbers in the random sequence */
    let newActive = generateRandom();
    if (newActive != active) {
        active = newActive;
        return active;
    }
    else { generateRandom() }
}

function stopGame() {
    console.log('game ended.');
    clearTimeout(alienTimeout);
    stopButton.style.display = "none";
    startButton.style.display = "block";
    finalScore(score);
    showModal();
}

function showScore() { /** shows cumulative score while playing */
    score += 1;
    scoreDisplay.textContent = `Your score: ${score}`;
    return score;
}


function getImage() { /** randomly selects alien background for active circle */
    const image1 = 'url("assets/images/planet1_alien1.png")';
    const image2 = 'url("assets/images/planet1_alien2.png")';
    const image3 = 'url("assets/images/planet1_alien3.png")';
    const image4 = 'url("assets/images/planet1_alien4.png")';
    const imageArray = [image2, image3, image4];
    let imgToReturn = imageArray[generateRandom()]
    console.log('in image function ', imgToReturn);
    return imgToReturn; // returns a URL attribute
}

function showModal() { /* modal menu at game end */

    if (!(overlay.classList.contains('visible'))) {
        const close = document.querySelector('.close');
        overlay.classList.add('visible');
        modal.classList.add('visible');
        close.classList.add('visible');
    }
}

function runGame() {
    console.log('game started');
    startButton.style.display = "none";
    stopButton.style.display = "block";
    activateAlien();

    circles.forEach((circle) => {
        circle.addEventListener('click', () => {
            if (!(circle == active)) {
                clearTimeout(alienTimeout);
                stopGame();
            }
            else {
                circle.style.backgroundImage = 'url("assets/images/planet1.png")';
                if ((score != 0) && (score % 3 == 0)) {
                    interval -= 100;
                    console.log('decreasing interval!');
                };

            }
            showScore();
            return score;
        })

    })
}

/* //////////////  Event listeners   /////////////// */

startButton.addEventListener('click', runGame);
stopButton.addEventListener('click', stopGame);
close.addEventListener('click', function () {
    overlay.classList.remove('visible');
})


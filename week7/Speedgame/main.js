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
//let newCurrent;
let current = generateRandom();
let interval = 1500;
let alienTimeout;
let active;

/* ////////////  FUNCTION DEFINITIONS //////////  */

function startGame() {
    console.log('game started');

    active = verifyRandom();
    /*     circles[active].style.backgroundImage = getImage(); */
    console.log(circles[active])
    circles[active].style.backgroundImage = 'url("assets/images/planet1_alien4.png")';
    alienTimeout = setTimeout(activateAlien, 1500);

    circles.forEach((circle) => {
        circle.addEventListener('click', () => {
            if (!(circle == circles[active])) {
                clearTimeout(alienTimeout);
                stopGame();
            }
            else {
                circle.style.backgroundImage = 'url("assets/images/planet1.png")';
                if ((score != 0) && (score % 3 == 0)) {
                    interval -= 100;
                    console.log('decreasing interval!');

                };
                showScore();
                return score;
            }

        })
        current = active;
        //return score;
        return current;
        alienTimeout = setTimeout(activateAlien, 1500);

    })


}

function finalScore(score) {
    gameOverText.textContent = `Your score is: ${score}.`;
    if (score > 20) { finalScoreText.textContent = `Wowzers, you're better than Margit`; }
    else if (score > 10) { finalScoreText.textContent = `Pretty good, for an amateur`; }
    else { finalScoreText.textContent = `Man you suck.`; }
}

function generateRandom() {
    let rand = Math.floor(Math.random() * 4);
    return rand;
}

function verifyRandom() {
    let newCurrent = generateRandom();
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

function showScore() {
    score += 1;
    scoreDisplay.textContent = `Your score: ${score}`;
    return score;
}


function getImage() {
    const image1 = 'url("assets/images/planet1_alien1.png")';
    const image2 = 'url("assets/images/planet1_alien2.png")';
    const image3 = 'url("assets/images/planet1_alien3.png")';
    const image4 = 'url("assets/images/planet1_alien4.png")';
    const imageArray = [image2, image3, image4];
    let imgToReturn = imageArray[generateRandom()]
    console.log('in image function ', imgToReturn);
    return imgToReturn; // returns a URL attribute
}



/* modal menu function */

function showModal() {

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


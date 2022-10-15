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
const defaultBG = 'url("assets/images/planet1.png")';

/* ////////////  GLOBAL VARIABLES //////////  */
let score = 0;
let activeIndex = (Math.floor(Math.random() * 4));  //an integer used for index of circles nodelist
let alienTimeout;
let timer = 1200;

/* ////////////  FUNCTION DEFINITIONS //////////  */

function activateAlien() {  //randomly selects active circle and applies alien background, initiates timeout

    newRandomIndex().then(() => {
        console.log("activeIndex: ", activeIndex);
        //circles.forEach((circle) => setBG(circle));
        for (let i = 0; i < circles.length; i++) {
            setBG(i);
        }

        alienTimeout = setTimeout(activateAlien, timer);
    });

    circles.forEach((circle) => {
        circle.addEventListener('click', () => {
            console.log('clicked:', circle);
            if (!(circle == circles[activeIndex])) {
                clearTimeout(alienTimeout);
                stopGame();

            }
            else {
                showScore();
                return score;

            }
        }
        )

    })
}

/* 
if((score != 0) && (score % 3 == 0)) {
    timer -= 200;
    console.log('decreasing interval!');
}; */


function setBG(index) {
    //console.log('index variable in setBG: ', index);
    if (index == activeIndex) {
        circles[activeIndex].style.backgroundImage = getImage();
    }
    else {
        circles[index].style.backgroundImage = defaultBG;
    }
}



function finalScore(score) {
    gameOverText.textContent = `Your score is: ${score}.`;
    if (score > 20) { finalScoreText.textContent = `Wowzers, you're amazing`; }
    else if (score > 10) { finalScoreText.textContent = `Pretty good, for an amateur`; }
    else { finalScoreText.textContent = `Honestly? Terrible.`; }
}

async function newRandomIndex() {
    let rand = Math.floor(Math.random() * 4);
    if (!(rand === activeIndex)) {
        activeIndex = rand;
        return activeIndex;
    } else newRandomIndex();
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
    const imageArray = [image1, image2, image3, image4];
    let imgToReturn = imageArray[(Math.floor(Math.random() * 4))]
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
}

/* //////////////  Event listeners   /////////////// */

startButton.addEventListener('click', runGame);
stopButton.addEventListener('click', stopGame);
close.addEventListener('click', function () {
    overlay.classList.remove('visible');
})


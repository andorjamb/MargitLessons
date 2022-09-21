/* ///////   DOCUMENT OBJECTS     //////////// */

const startButton = document.querySelector("#startButton");
const stopButton = document.querySelector("#stopButton");
const scoreDisplay = document.getElementById('scoreDisplay');
const circle = document.querySelectorAll(".circle");
const active = document.querySelector(".active");


/* ////////////  GLOBAL VARIABLES //////////  */
let score = 0;
let seed; 
let lastSeed = generateRandom;

/* ////////////  FUNCTION DEFINITIONS //////////  */

function startGame() {
    console.log('game started');
    seed = checkRandom();
}

function checkRandom() {
    seed = generateRandom();
    if (seed != lastseed) {
        lastseed = seed;
        return seed;
    }
    else { generateRandom() }
}
function stopGame() {
    console.log('game ended.');
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
    scoreDisplay.textContent = `Your score: ${score}`;   //why doesn't this work outside of the function?
    return score;
}

function generateRandom() {
    newRandom = Math.floor(Math.random() * 4);
    console.log(newRandom);
    return newRandom;
}




/* //////////////  Program execution     /////////////// */
startButton.addEventListener('click', startGame);
stopButton.addEventListener('click', stopGame);



/* Pseudocode notes 

while(game running) {
call setTimeout function (calls random number function)
}

each time new random number generated this value is passed to function that changes class of selected div

*/
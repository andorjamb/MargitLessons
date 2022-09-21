const startButton = document.querySelector("#startButton");
const stopButton = document.querySelector("#stopButton");
const scoreDisplay = document.querySelector('#scoreDisplay');
const circle = document.querySelectorAll(".circle");
const active = document.querySelector(".active");

let score = 0;

function startGame() {
    console.log('game started');

}

function stopGame() {
    console.log('game ended.');
}

circle.forEach((node, index) => {
    node.addEventListener('click', () => {
        registerCircle(node)
        console.log(node);
        score++;
        console.log('score is: ', score);
    });
})


function registerCircle() {
}


startButton.addEventListener('click', startGame);
stopButton.addEventListener('click', stopGame);
scoreDisplay.textContent = `Your score: ${score}`;
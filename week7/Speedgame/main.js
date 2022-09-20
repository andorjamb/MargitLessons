const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");

startButton.addEventListener('click', startGame);
stopButton.addEventListener('click', stopGame);

function startGame() {
    console.log('game started');
    startButton.classList.remove();
    stopButton.classList
}

function stopGame() { }

const active = document.querySelector(".active");
console.log(active);

const circle = document.querySelectorAll(".circle");
console.log(circle);
for (item in circle) {
    function() {

        item.addEventListener('click', function () {
            console.log('clicking circle:', item);
        })
    }


    function toggleActive() {
        setTimeout(function () {

        }, 2000);
    }
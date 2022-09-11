
const form = document.querySelector("form");
const carMaker = document.querySelector("#carMaker");
const carModel = document.querySelector("#carModel");
const carOwner = document.querySelector("#carOwner");
const carPrice = document.querySelector("#carPrice");
const carColor = document.querySelector("#carColor");

form.addEventListener("submit", function (event) {
    event.preventDefault;
    getCarData();
})

//constructor function for the car object
function Car(licence, maker, model, owner, price, color) {
    this.licenceNumber = licence;
    this.carMaker = maker;
    this.carModel = model;
    this.carOwner = owner;
    this.carPrice = price;
    this.carColor = color;
}

function getCarData() {
    const newCar = new Car();

}
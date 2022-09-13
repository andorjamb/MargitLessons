
const form = document.querySelector("#addCar");
let newCar;
let cars = [];

const addCar = document.querySelector("#addCar"); //button
const reset = document.querySelector("#reset");
const carTable = document.querySelector('#carTable');
form.addEventListener('reset', function () {
    cars = [];
});
form.addEventListener("submit", function (event) {
    event.preventDefault();
    cars.push(getCarData());
    let newCarValues = Object.values(getCarData());
    populateTable(newCarValues);

})

//constructor function for the car object
class Car {
    constructor(licence, maker, model, owner, price, color) {
        this.licenceNumber = licence;
        this.carMaker = maker;
        this.carModel = model;
        this.carOwner = owner;
        this.carPrice = price;
        this.carColor = color;
    }
}

function getCarData() { //function collects values from input fields
    const carLicence = document.querySelector("#carLicence").value;
    const carMaker = document.querySelector("#carMaker").value;
    const carModel = document.querySelector("#carModel").value;
    const carOwner = document.querySelector("#carOwner").value;
    const carPrice = document.querySelector("#carPrice").value;
    const carColor = document.querySelector("#carColor").value;
    form.reset();
    return newCar = new Car(carLicence, carMaker, carModel, carOwner, carPrice, carColor);


}

function populateTable(valueArray) {/* for (let i = 0; i < cars.length; i++) {
    let newCarValues = Object.values(cars[i]) //returns an array of the car's values
    let newRow = carTable.insertRow(i);
    //let newCell = newRow.insertCell();
    for (let j = 0; j < newCarValues.length; j++) {
        let newData = document.createTextNode(`${newCarValues[j]}`);
        newRow.appendChild(newData);
    }
} */

    let newRow = carTable.insertRow();
    for (let j = 0; j < valueArray.length; j++) {
        let newData = document.createTextNode(`${valueArray[j]}`);
        newRow.appendChild(newData);
    }
    let newCell = newRow.insertCell();
    newCell.textContent = "hi";
    //syntax: for(const i of carArray)){}
    //search button can be a submit button


}


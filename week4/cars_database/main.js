
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
    return newCar = new Car(carLicence, carMaker, carModel, carOwner, carPrice, carColor);

}

function populateTable(valueArray) {
    let newRow = document.createElement('tr');
    carTable.appendChild(newRow);
    for (let j = 0; j < valueArray.length; j++) {//for each car object value:
        let newData = document.createElement('td');
        newData.innerHTML = valueArray[j];
        carTable.appendChild(newData);

    }
}

    //syntax: for(const i of carArray)){}
    //search button can be a submit button



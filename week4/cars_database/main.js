
const form = document.querySelector("#addCar");
let newCar;
let cars = [];

const addCar = document.querySelector("#addCar"); //button
const reset = document.querySelector("#reset");
const searchButton = document.querySelector("#searchButton"); // search button
const carTable = document.querySelector('#carTable');
form.addEventListener('reset', function () {
    cars = [];
});
searchButton.addEventListener("submit", findCar);
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
    newRow.className = "database-container-body";
    carTable.appendChild(newRow);
    for (let j = 0; j < valueArray.length; j++) {//for each car object value:
        let newData = document.createElement('td');
        newData.className = "table-cells";
        newData.innerHTML = valueArray[j];
        carTable.appendChild(newData);
    }
}

function findCar() {
    const searchResult = document.getElementById("searchResult");
    const searchLicence = document.getElementById("searchLicence");
    console.log(searchLicence);
    for (const k of cars) {
        if (cars[k].licenceNumber === searchLicence) {
            searchResult.textContent = `Result: Car owner: ${cars[k].carOwner}, car Model: ${cars[k].carMaker}, car make: ${cars[k].carModel}`;
            return cars[k];
        } else { searchResult.textContent = "The car was not found." }
    }
}






const form = document.querySelector("form");
let newCar;
let cars = []; //empty array to contain each car object added to database

const addCar = document.querySelector("#addCar");
const reset = document.querySelector("#reset");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    populateTable(getCarData());

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

function populateTable() {  //function prints new object to table 'database'
    //console.table(array or object); each value in the array will a <td> in the row
    let newRow = getCarData();
    console.table(newRow);
}
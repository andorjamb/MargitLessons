/*
////////Notes from Margit's example://///////

const form = document.querySelector('form');
const size = document.querySelectorAll();
const toppings = document.querySelectorAll();
const takeOrder = function(event){
event.preventDefault(); 
let customerName = customer.value;  
};

form.addEventListener('submit', takeOrder)

toppings.forEach((item)=>{toppingsResult.push(item.value);})
*/


let total = 0; // variable for total order cost
const pizzaForm = document.querySelector('pizzaOrder');

const toppings = document.getElementsByName("toppings");
console.log(toppings);
const sizes = document.getElementsByName("size");

pizzaForm.addEventListener('submit', readOrder);
console.log("toppings array contents:", toppingsList);

const form = document.querySelector("form");
form.addEventListener("submit", test);

function readOrder() {
    test();
    const cost = function () {
        let price = Number(sizes.value);
        return price;
    }
    total = total + cost;
    console.log(`total is ${total}`);


}

function test(event) {
    event.preventDefault();
    console.log("print me when something is being changed, to show I am listening");

}

let toppingSelection = function () {
    const toppingsList = []; // an empty array of strings
    toppings.forEach(function (topping) {
        if (topping.checked) {
            console.log(topping.value);
            toppingsList.push(topping.value)
        };
    })
    return toppingsList;
}


function summary() {
    const customer = document.querySelector('customer');
    nameField = document.querySelector('nameField');
    nameField.textContent = customer.value;
    console.log('customer name: ', customer.value);
}


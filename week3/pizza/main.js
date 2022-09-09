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

const pizzaForm = document.querySelector("pizzaForm");
const toppings = document.getElementsByName("toppings");



pizzaForm.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("print me to show I am listening");
});

pizzaForm.addEventListener('change', readOrder);
/* console.log("toppings array contents:", toppingsList);
 */



function readOrder() {

    const cost = function () {
        const sizes = document.getElementsByName("sizes");
        sizes.forEach(function (size) { if (size) { } })
        let price = Number(sizes.value);
        return price;
    }
    console.log('price is', price)
    total = total + cost;
    console.log(`total is ${total}`);


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


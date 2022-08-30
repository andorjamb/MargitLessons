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

/*
querySelectorAll gives a nodelist. 
nodelist - looks like an array but it isn't, you can't use array methods on it. 

*/

let total = 0; // variable for total order cost
const toppingsList = []; // an empty array of strings
const toppings = document.getElementsByName("toppings");
const sizes = document.getElementsByName("size");

sizes.forEach(function (size) {
    console.log(size.value);
});

sizes.forEach(function (size) {
    console.log(size.value);
});
/* 
toppings.forEach(function (topping) {
    topping.addEventListener("change", test);
}); */
// this is not working, the listener needs to be attached to something else?

function check(selection) {
    if (selection.checked) {
        console.log(selection.value);
        toppingsList.push(selection.value)
    };
}

function updateCart(c) {
    total = total + c;
    console.log(`total is ${total}`);
}

const c = function () {
    let price = Number(size.value);
    console.log(price);
    return price;
}



console.log("toppings array contents:", toppingsList);

let total = 0; // variable for total pizza cost
let sizePrice = 0;
let extraToppings;
let deliveryMethod;



const size = document.getElementsByName("size");
console.log(size.value);

// toppingsBoxes is an array of checkbox elements
const toppingsBoxes = document.getElementsByName("toppings");
const listenToppings = toppingsBoxes.addEventListener(){ };

console.log(toppingsBoxes.value);
countToppings();


function updateCart() {
    total = total + sizePrice + extraToppings + deliveryMethod;
    console.log(`total is ${total}`);
}

// function to tally the number of toppings selected
function countToppings() {
    let toppingsNumber = 0;
    toppingsBoxes.forEach(function (toppingBox) {
        if (toppingBox.checked) {
            toppingsNumber += 1;
            console.log(toppingBox.value);
        }
    })

}


//function to send size to total and summary
function getSize(size) {
    switch (size) {
        case 2:
            sizePrice = 7.5;
            break;
        case 4:
            sizePrice = 10.5;
            break;
        case 6:
            price = 12.5;
            break;
        case 8:
            price = 15.5;
            break;
    }
    return sizePrice;
}


/* document.getElementsByName("size").addEventListener("click", function() {let size = document.sizeForm.size.value;
console.log(size);})
 */
// on submit: calculate order summary

//for each radio button:
/*if checked: add value to total

*/
//access form.name.value



/*toppings:
total toppings: if > 4*/
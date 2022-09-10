
let total = 0; // variable for total order cost
const pizzaForm = document.getElementById("pizzaForm");

pizzaForm.addEventListener("submit", function (event) {
    event.preventDefault();
});

pizzaForm.addEventListener('submit', readOrder);

function getSize() {
    const sizes = document.getElementsByName("sizes");
    sizes.forEach(function (size) { if (size.checked) { sizePrice = Number(size.value); } })
    return sizePrice;
}
//error when undefined

function getToppings() {
    const toppingsList = [];
    const toppings = document.getElementsByName("toppings");
    toppings.forEach(function (topping) {
        if (topping.checked) {
            toppingsList.push(topping.value)
        };
    })
    return toppingsList;
}
function getDelivery() {
    let deliveryChoice = document.getElementById("delivery");
    console.log(deliveryChoice.value);
    if (deliveryChoice.value == "delivery") {
        return parseFloat(5);
    }
    else { return 0 }
}

function getCustomer() {
    let customer = document.getElementById("customer").value;
    console.log('customer name:', customer);
    return customer;
}

function readOrder() {
    let sizePrice = getSize(); // a number
    let toppingSelection = getToppings();  //a string array
    let deliveryCost = getDelivery(); // number
    let customer = getCustomer(); // string

    function summary() {
        let nameField = document.getElementById('nameField');
        let sizeField = document.getElementById('sizeField');
        let toppingsField = document.getElementById('toppingsField');
        let deliveryField = document.getElementById('deliveryField');
        nameField.textContent = customer;
        sizeField.textContent = sizePrice;
        toppingsField.textContent = toppingSelection;
        deliveryField.textContent = deliveryCost;
    }



    total = sizePrice + extraToppings + deliveryCost;
    console.log(`total is ${total}`);
}




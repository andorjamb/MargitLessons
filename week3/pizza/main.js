
let total = 0; // variable for total order cost
const pizzaForm = document.getElementById("pizzaForm");

pizzaForm.addEventListener("submit", function (event) {
    event.preventDefault();
});

pizzaForm.addEventListener('submit', readOrder);

function getSize() {
    let pizzaSize;
    const sizes = document.getElementsByName("sizes");
    sizes.forEach(function (size) { if (size.checked) { pizzaSize = size.id; } })
    return pizzaSize;
}

function getSizePrice() {
    let pizzaPrice;
    const sizes = document.getElementsByName("sizes");
    sizes.forEach(function (size) { if (size.checked) { pizzaPrice = Number(size.value); } })
    return pizzaPrice;
}

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
    if (deliveryChoice.value == "delivery") {
        return delivery = {
            "method": "Delivery",
            "cost": parseFloat(5),
        }
    }
    else {
        return delivery = {
            "method": deliveryChoice.value,
            "cost": parseFloat(0),
        }
    }



}


function getCustomer() {
    let customer = document.getElementById("customer").value;
    console.log('customer name:', customer);
    return customer;
}


function readOrder() {
    let sizePrice = getSizePrice(); // a number
    let pizzaSize = getSize();
    let toppingSelection = getToppings();  //a string array

    let extraToppings = 0;
    if (toppingSelection.length > 4) {
        extraToppings = (toppingSelection.length - 4);
    }

    let deliveryCost = getDelivery().cost; // number
    let deliveryMethod = getDelivery().method;
    let customer = getCustomer(); // string
    console.log('size', sizePrice);
    console.log('del', deliveryCost);
    console.log('50 cents times toppings', extraToppings * 0.5);

    let total = sizePrice + (extraToppings * 0.5) + deliveryCost;
    console.log('extratoppings:', extraToppings);

    let customerField = document.getElementById('customerField');
    let sizeField = document.getElementById('sizeField');
    let toppingsField = document.getElementById('toppingsField');
    let deliveryField = document.getElementById('deliveryField');
    let totalField = document.getElementById('totalField');
    customerField.textContent = customer;
    sizeField.textContent = pizzaSize;
    toppingsField.textContent = toppingSelection;
    deliveryField.textContent = deliveryMethod; //
    totalField.textContent = total.toFixed(2) + '€';
}




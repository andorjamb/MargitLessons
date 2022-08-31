

function outcomeDisplay() {
    let outcome = document.getElementById("outcome"); //<p> element
    let price = Number(document.getElementById("priceInput").value);
    console.log("price input:", price);
    let money = Number(document.getElementById("moneyInput").value);
    console.log("money input: ", money);

    let litres = Math.floor(money / price);
    console.log(litres);


    if (litres >= 10) {
        outcome.textContent = `You can get about ${litres} litres. Good, now you can escape.`
    }
    else {
        outcome.textContent = `You can only get about ${litres} litres. You will have to stay here.`
    }
}


let calculateButton = document.getElementById("calculateButton");

// getElement finds the element, but not its value. You need to get the attribute called 'value' of the input object. By default it is an empty string. 
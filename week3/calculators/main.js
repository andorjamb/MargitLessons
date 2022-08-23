

function gasCalculation(price, money){
let litres = money/price;
return litres;

}

let price = getElementById("priceInput");
let money = getElementById("moneyInput");
let litres =  gasCalculation(price,money);
let outcome = getElementById("outcome");
getElementById();
if (litres >= 10){outcome.textContent = `Good, you can get about ${litres} litres.`
}
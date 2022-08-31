/*
Insurance calculator

for each pre-existing health condition, increase of 1% cost
for each good habit, reduce price by 5% per good habit
bad habits - increase 5% per bad habit
*/

console.log("aghhhh");
const client = document.querySelector("#client");
const age = document.getElementById("age").value;

console.log(client.value);
console.log(age);

function ageSurcharge(age) {
    let penalty = 1;
    switch (age) {
        case age < 18:
            penalty = 1;
            break;
        case age < 26:
            penalty = 1.1;
            break;
        case age < 36:
            penalty = 1.3;
            break;
        case age < 46:
            penalty = 1.6;
            break;
        case age < 56:
            penalty = 2;
            break;
        case age < 66:
            penalty = 2.5;
            break;
        case age > 65:
            penalty = 3.1;
            break;
    }
    return penalty * 500;
}

console.log(ageSurcharge(age));

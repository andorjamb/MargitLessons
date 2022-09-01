/*
Insurance calculator

for each pre-existing health condition, increase of 1% cost
for each good habit, reduce price by 5% per good habit
bad habits - increase 5% per bad habit
*/

//global variables
const form = document.querySelector("form");
const client = document.querySelector("#client");
let healthConditions = document.getElementsByName("health");
let basePremium = 500;
let clientPremium;
let healthArray = [];

//start of function
function agePenalty() {
  let age = document.querySelector("#age").value;
  let penalty = 1;

  if (age < 19) {
  } else if (18 > age || age < 26) {
    penalty = 1.1;
  } else if (25 > age || age < 36) {
    penalty = 1.3;
  } else if (35 > age || age < 46) {
    penalty = 1.6;
  } else if (45 > age || age < 56) {
    penalty = 2;
  } else if (55 > age || age < 66) {
    penalty = 2.5;
  } else if (age > 65) {
    penalty = 3.2;
  }

  clientPremium = Number(penalty * basePremium);

  const ageOutput = document.getElementById("ageOutput");
  ageOutput.textContent = `Your age increases your premium to ${clientPremium}€.`;
  ageOutput.style.border = "2px solid rgba(48, 48, 110, 0.331)";
  ageOutput.style.borderRadius = "17px";
  console.log("in function", clientPremium);
  return clientPremium;
}
//end of function

//start of function
function healthPenalty() {
  console.log("printing return value from age function:", agePenalty());
  healthConditions.forEach(function (item) {
    if (item.checked) {
      if (!healthArray.includes(item.value)) {
        healthArray.push(item.value);
      } else {
        if (healthArray.includes(item.value)) {
          let index = healthArray.indexOf(item.value);
          healthArray = healthArray.splice(index, 1);
          console.log("new array:", healthArray);
        }
      }
      return healthArray.length;
    }
    //recalculate premium:
    function newPremium() {
      clientPremium = agePenalty() * 1.01;
      return clientPremium;
    }
    console.log("length of health array: ", healthArray.length);
    for (let k = 0; k < healthArray.length; k++) {
      clientPremium = newPremium();
      console.log(clientPremium);
    }
  });

  const healthPenaltyDisplay = document.getElementById("healthPenaltyDisplay");
  healthPenaltyDisplay.textContent = `Your pre-existing health conditions increase your premium to ${clientPremium}€.`;
  healthPenaltyDisplay.style.border = "2px solid rgba(48, 48, 110, 0.331)";
  healthPenaltyDisplay.style.borderRadius = "17px";
  return clientPremium;
}
//end of function
console.log("health function returns: ", healthPenalty());

function habitPenalty() {
  const habitOutput = document.getElementById("habitOutput");
  console.log(smoking);
  habitOutput.textContent = `Your habit conditions increase your premium to ${clientPremium}€.`;
  habitOutput.style.border = "2px solid rgba(48, 48, 110, 0.331)";
  habitOutput.style.borderRadius = "17px";
}

function calculateAll() {
  agePenalty();
  console.log(clientPremium);
  healthPenalty();
  console.log(clientPremium);
  habitPenalty();
  console.log(clientPremium);
}

/*
const hypertension = document.getElementById("hypertension");
const bloodsugar = document.getElementById("bloodsugar");
const overweight = document.getElementById("overweight");
hypertension.addEventListener("change", healthPenalty);
bloodsugar.addEventListener("change", healthPenalty);
overweight.addEventListener("change", healthPenalty);

const smoking = document.getElementById("smoking");
const alcohol = document.getElementById("alcohol");
const drugs = document.getElementById("drugs");
smoking.addEventListener("change", habitPenalty);
alcohol.addEventListener("change", habitPenalty);
drugs.addEventListener("change", habitPenalty);
*/

form.addEventListener("change", calculateAll);

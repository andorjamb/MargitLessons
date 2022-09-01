/*
Insurance calculator

for each pre-existing health condition, increase of 1% cost
for each good habit, reduce price by 5% per good habit
bad habits - increase 5% per bad habit
*/
const form = document.querySelector("form");
const client = document.querySelector("#client");
let basePremium = 500;
let clientPremium = 0;
function agePenalty() {
  let age = document.querySelector("#age").value;
  let ageCategory;
  let penalty = 1;

  if (age < 19) {
    ageCategory = "A";
  } else if (18 > age || age < 26) {
    ageCategory = "B";
    penalty = 1.1;
  } else if (25 > age || age < 36) {
    ageCategory = "C";
    penalty = 1.3;
  } else if (35 > age || age < 46) {
    ageCategory = "D";
    penalty = 1.6;
  } else if (45 > age || age < 56) {
    ageCategory = "E";
    penalty = 2;
  } else if (55 > age || age < 66) {
    ageCategory = "F";
    penalty = 2.5;
  } else if (age > 65) {
    ageCategory = "G";
    penalty = 3.2;
  }

  let clientPremium = penalty * basePremium;

  const ageOutput = document.getElementById("ageOutput");
  ageOutput.textContent = `Your age increases your base premium to ${clientPremium}€.`;
  ageOutput.style.border = "2px solid rgba(48, 48, 110, 0.331)";
  ageOutput.style.borderRadius = "17px";
  return clientPremium;
}

let healthConditions = 0;
let healthArray = [];
let healthOptions = document.getElementsByName("health");
console.log("health nodelist:", healthOptions); //prints element type and id
for (let i = 0; i < healthOptions.length; i++) {
  console.log("health nodelist values:", healthOptions[i].value);
  console.log(healthOptions[i].checked);
} //prints value of checkbox input element

function healthPenalty() {
  console.log(healthOptions.value);
  healthOptions.forEach(function (item) {
    if (item.checked) {
      if (!healthArray.includes(item.value)) {
        healthArray.push(item.value);
      }
    }
    clientPremium = clientPremium * 1.01;
    console.log('clientpremium value:', clientPremium);
    
  });

  console.log("health array:", healthArray);

  for (let j = 0; j < healthArray.length; j++) {}

  const healthOutput = document.getElementById("healthOutput");
  clientPremium = clientPremium * 1.01;
  healthOutput.textContent = `Your health conditions increase your premium to ${clientPremium}€.`;
  healthOutput.style.border = "2px solid rgba(48, 48, 110, 0.331)";
  healthOutput.style.borderRadius = "17px";
  return clientPremium;
}

function habitPenalty() {
  const habitOutput = document.getElementById("habitOutput");
  console.log(smoking);
  habitOutput.textContent = `Your habit conditions increase your premium to ${clientPremium}€.`;
  habitOutput.style.border = "2px solid rgba(48, 48, 110, 0.331)";
  habitOutput.style.borderRadius = "17px";
}

function calculateAll() {
  console.log(agePenalty(age));
  console.log(healthForm);
}

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

//form.addEventListener("change", ageLoading);

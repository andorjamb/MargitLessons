/*
Insurance calculator

for each pre-existing health condition, increase of 1% cost
for each good habit, reduce price by 5% per good habit
bad habits - increase 5% per bad habit
*/
const form = document.querySelector("form");
const client = document.querySelector("#client");
//console.log('client', client.value);
function ageLoading() {
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

  let basePremium = penalty * 500;

  const ageOutput = document.getElementById("ageOutput");
  ageOutput.textContent = `Your age increases your base premium to ${basePremium}€.`;
  ageOutput.style.border = "2px solid rgba(48, 48, 110, 0.331)";
  ageOutput.style.borderRadius = "17px";
  return basePremium;
}

function healthPenalty() {
  let healthConditions = 0; // maybe this should be global so it isn't reset on function trigger
  let healthPremium = 0;
  let healthOptions = document.getElementsByName("health");
  healthOptions.forEach(function (item) {
    if (item.checked) {
      //healthConditions = healthConditions + 1;
      healthPremium = basePremium * 1.01;
    }
    console.log(healthConditions);
  });

  /*increase of 1% cost for each*/
  const healthOutput = document.getElementById("healthOutput");
  healthOutput.textContent = `Your health conditions increase your premium to ${healthPremium}€.`;
  return healthPremium;
}

function habitPenalty() {
  console.log(smoking);
}

function calculateAll() {
  console.log(ageLoading(age));
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

form.addEventListener("change", ageLoading);

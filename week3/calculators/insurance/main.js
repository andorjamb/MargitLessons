//Insurance calculator

const form = document.querySelector("form");
const client = document.querySelector("#client");
const submit = document.querySelector("#submit");
const healthConditions = document.getElementsByName("health");
const habitsNodelist = document.getElementsByName("habit");
const clientResult = document.getElementById("clientField");
const healthResult = document.getElementById("healthResult");
const ageResult = document.getElementById("ageResult");
const habitResult = document.getElementById("habitResult");
const basePremium = 500;

form.addEventListener("submit", function (event) {
  event.preventDefault();
  calculateAll();
});

function calculateAgePremium() {
  let age = document.querySelector("#age").value;
  let penalty = 1;
  let agePremium = 0;

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

  agePremium = Number(penalty * basePremium);
  return agePremium;
}

function getHealthArray() {
  let healthArray = [];
  healthConditions.forEach(function (item) {
    if (item.checked) {
      if (!healthArray.includes(item.value)) {
        healthArray.push(item.value);
      } else {
        if (healthArray.includes(item.value)) {
          let index = healthArray.indexOf(item.value);
          healthArray = healthArray.splice(index, 1);
        }
      }
    }
  });
  return healthArray;
}

function calculateHealthPremium(clientPremium = basePremium) {
  for (let k = 0; k < getHealthArray().length; k++) {
    clientPremium = clientPremium * 1.01;
    console.log(`round ${k + 1} of healthPenalty: ${clientPremium}`);
  }
}

function getHabitObject() {
  let habits = {}; //return value, an object
  const badHabits = [];
  const goodHabits = [];
  habitsNodelist.forEach(function (item) {
    if (item.checked) {
      if (item.class == "bad") {
        if
          (!badHabits.includes(item.value)) {
          badHabits.push(item.value);
        }
      }
      else {
        if (healthArray.includes(item.value)) {
          let index = healthArray.indexOf(item.value);
          healthArray = healthArray.splice(index, 1);
        }
      }
    } else { goodHabits.push(item.value); }
  });

  return habits = {
    "badHabits": badHabits.length,
    "goodHabits": goodHabits.length,
  }

}

function calculateHabitPremium(clientPremium = basePremium) {
  //for each good habit, reduce price by 5%, 
  //ad habits - increase 5% per bad habit
  for (let j = 0; j < getHabitObject().badHabits; j++) {
    clientPremium = clientPremium * 1.05;
  }
  for (let i = 0; i < getHabitObject().goodHabits; i++) {
    clientPremium = clientPremium - (clientPremium * 0.05);
  }
  return clientPremium;
}
/*

function resultsObject() {

  const premiumObject = {
    "agePremium": calculateAgePremium(),
    "healthPremium": calculateHealthPremium(),
    "habitPremium": calculateHabitPremium()
  }
  return premiumObject;
}*/

//testing results:

function calculateAll() {
  console.log("age function returns: ", calculateAgePremium());
  console.log("health function returns: ", calculateHealthPremium());
  console.log("habit function returns: ", calculateHabitPremium());


  clientField.textContent = `Hi €{},`;
  ageResult.textContent = `Your age increases your premium to ${basePremium + calculateAgePremium()}€.`;
  healthResult.textContent = `Your pre-existing health conditions increase your premium to ${basePremium + calculateHealthPremium()}€.`;
  habitResult.textContent = `Your lifestyle increases your premium to ${calculateHabitPremium}€.`;
}




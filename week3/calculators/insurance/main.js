//Insurance calculator

const form = document.querySelector("form");
const client = document.querySelector("#client");
const submit = document.querySelector("#submit");
const healthConditions = document.getElementsByName("health");
const habitsNodelist = document.getElementsByName("habits");
const clientField = document.getElementById("clientField");
const healthField = document.getElementById("healthField");
const ageField = document.getElementById("ageField");
const habitField = document.getElementById("habitField");
const resultsBox = document.getElementById("resultsBox");
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
  }
  return clientPremium.toFixed();
}

function getHabitArray() {
  let habits = {};
  let goodHabits = [];
  let badHabits = [];
  habitsNodelist.forEach(function (item) {
    if (item.checked) {
      if (item.className == "bad") {
        if (!badHabits.includes(item.value)) {
          badHabits.push(item.value)
        }
      } else {
        goodHabits.push(item.value);
      }
    }
  });
  console.log('bad:', badHabits, 'good:', goodHabits);
  return habits = {
    "badHabits": badHabits.length,
    "goodHabits": goodHabits.length,
  }
}

function calculateHabitPremium(clientPremium = basePremium) {
  for (let j = 0; j < getHabitArray().badHabits; j++) {
    clientPremium *= 1.05;
    console.log('printing bad habits:', getHabitArray().badHabits);
  }
  for (let i = 0; i < getHabitArray().goodHabits; i++) {
    clientPremium = clientPremium - (clientPremium * 0.05);
  }
  return clientPremium.toFixed();
}

function calculateAll() {

  clientField.textContent = `Hi ${client.value},`;
  ageField.textContent = `Your age increases your premium to ${calculateAgePremium()}€.`;
  healthField.textContent = `Your pre-existing health conditions increase your premium to ${calculateHealthPremium(calculateAgePremium())}€.`;
  habitField.textContent = `Your lifestyle increases your premium to ${calculateHabitPremium(calculateHealthPremium(calculateAgePremium()))}€.`;
}




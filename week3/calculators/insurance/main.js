/*
Insurance calculator
*/

//global variables
const form = document.querySelector("form");
const client = document.querySelector("#client");
const submit = document.querySelector("#submit");
let healthConditions = document.getElementsByName("health");
let basePremium = 500;
//let clientPremium;

function calculateAll() {
  //start of age function
  function agePenalty() {
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

    const ageOutput = document.getElementById("ageOutput");
    ageOutput.textContent = `Your age increases your premium to ${agePremium}€.`;
    ageOutput.style.border = "2px solid rgba(48, 48, 110, 0.331)";
    ageOutput.style.borderRadius = "17px";
    return agePremium;
  }
  //end of function

  //start of function
  function healthPenalty() {
    let healthPremium = 0;
    console.log(
      "printing return value from age function to show it can access in health:",
      agePenalty()
    );
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

    /*

    const healthPenaltyDisplay = document.getElementById(
      "healthPenaltyDisplay"
    );
    healthPenaltyDisplay.textContent = `Your pre-existing health conditions increase your premium to ${healthPremium}€.`;
    healthPenaltyDisplay.style.border = "2px solid rgba(48, 48, 110, 0.331)";
    healthPenaltyDisplay.style.borderRadius = "17px";
    */
    return healthArray.length;
  }
  //end of health function

  //start of habits function
  //for each good habit, reduce price by 5%, bad habits - increase 5% per bad habit

  function habitPenalty() {
    /*
    const habitOutput = document.getElementById("habitOutput");
    habitOutput.textContent = `Your habit conditions increase your premium to ${clientPremium}€.`;
    habitOutput.style.border = "2px solid rgba(48, 48, 110, 0.331)";
    habitOutput.style.borderRadius = "17px";

    */
  }
  console.log("age function returns: ", agePenalty());
  //should print vlaue of agePremium variable
  console.log("health function returns: ", healthPenalty());
  //should return the length of health conditions array
  console.log("habit function returns: ", habitPenalty());
  //

  /*
  let clientPremium = agePenalty();
  console.log("after calculating age premium:", clientPremium);
*/
  let clientPremium = agePenalty();
  for (let k = 0; k < healthPenalty(); k++) {
    clientPremium = clientPremium * 1.01;
    console.log(`round ${k} of healthPenalty: ${clientPremium}`);
  }
}
//end of main function

submit.addEventListener("click", function (event) {
  event.preventDefault();
  calculateAll();
});

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

//form.addEventListener("change", calculateAll);

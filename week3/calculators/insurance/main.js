/*
Insurance calculator
*/

//global variables
const form = document.querySelector("form");
const client = document.querySelector("#client");
const submit = document.querySelector("#submit");
const healthConditions = document.getElementsByName("health");
const habitsNodelist = docuement.getElementsByName("habit");
const basePremium = 500;
const healthResult = document.getElementById(
  "healthResult");
const ageResult = document.getElementById("ageResult");
const habitResult = document.getElementById("habitResult");

//main calculator function, triggered on submit
function calculateAll() {
  /*const results = document.getElementsByClassName("results");
  results.style.visibility = "visible";*/
  //start of age function
  let clientPremium = 0;
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
    return agePremium;
  }
  //end of function

  //start of function
  function healthPenalty() {
    let healthPremium = 0;

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
    return healthArray.length;
  }
  //end of health function

  //start of habits function
  //for each good habit, reduce price by 5%, bad habits - increase 5% per bad habit

  function habitPenalty() {
    let habitPremium = 0;
    const badHabits = [];
    const goodHabits = [];
    habitsNodelist.forEach(function (item) {
      if (item.checked) {
        if (item.class == "bad"){
          if
          (!badHabits.includes(item.value)){
            badHabits.push(item.value);
          }}
       
    else {
      if (healthArray.includes(item.value)) {
        let index = healthArray.indexOf(item.value);
        healthArray = healthArray.splice(index, 1);
      }
    }
  }
});

return

  }
//end of habits function


//start of display results function

displayResults() {

  const object = {
    "agePenalty": "" //return value of AgePenalty function
      "healthPenalty": "", //
    "habitPenalty": "",
  }
  return object;
}

//end of display results function

//back in main function: 
//testing results:
console.log("age function returns: ", agePenalty());
//should print vlaue of agePremium variable
console.log("health function returns: ", healthPenalty());
//should return the length of health conditions array
console.log("habit function returns: ", habitPenalty());
//

clientPremium = agePenalty();

for (let k = 0; k < healthPenalty(); k++) {
  clientPremium = clientPremium * 1.01;
  console.log(`round ${k + 1} of healthPenalty: ${clientPremium}`);
}

displayResults().
  /*
    healthResult.textContent = `Your pre-existing health conditions increase your premium to ${displayResults().agePenalty}€.`;
    /*
  
    ageResult.textContent = `Your age increases your premium to ${displayResults.healthPenalty}€.`;*/
  /*
    habitResult.textContent = `Your habits increase your premium to ${displayResults().habitPremium}€.`;
  */

}
//end of main function

submit.addEventListener("click", function (event) {
  event.preventDefault();
  calculateAll();


});


form.addEventListener("change", calculateAll);

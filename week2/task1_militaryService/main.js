let reply = Number.parseInt(prompt("How old are you?"));
console.log(reply);
console.log(typeof(reply));

switch (reply) {
   case reply < 18: console.log("Too young.")
   
   case reply < 27:  console.log (" Right age for military service. ")
   
   case reply < 41: console.log("You are in reserve. ")
   
   case reply < 55: console.log("you are in backup reserve. ")
   
   default: "too aged. "
}
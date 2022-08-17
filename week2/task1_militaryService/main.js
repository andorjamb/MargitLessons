let reply = Number.parseInt(prompt("How old are you?"));
console.log(reply);
console.log(typeof(reply));


if (reply < 18) {console.log("too young")}
else if (reply < 27) {console.log (" Right age for military service. ")}
else if (reply < 41){"You are in reserve. "}
else if (reply < 55){console.log("you are in backup reserve. ")} 
else {console.log("too aged. ")}  
   


/* 
switch (reply) {
   case reply < 18: console.log("Too young.")
    break;
   case reply < 27:  console.log (" Right age for military service. ")
   break;
   case reply < 41: console.log("You are in reserve. ")
    break;
   case reply < 55: console.log("you are in backup reserve. ")
    break;
   default: "too aged. "
} */
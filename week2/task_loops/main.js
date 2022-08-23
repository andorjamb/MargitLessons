loops/loops.md


//1.

for(let i=1;i<100;i+=2) {
console.log(i);
}

//2.

let value = 100;
let string = "";
for (let i=2;i<51;i+=2) {
        let chunk = `${i} ${value-i} `;
         string += chunk;
}
console.log(string);

//3.

let distance, time, speed;
while (distance!=0) {
    distance = Number.parseInt(prompt("Distance: "))
    time = Number.parseInt(prompt("Time: "))
    speed = distance/time;

    console.log(`Average speed is ${speed} km/h.`);
    
} 

//4. Make a program that asks 20 numbers from user. 
//After that the program prints out how many of those numbers were even.

let counter = 0;
for (let i=0;i<20;i++){
let number = Number.parseInt(prompt("give a number:"));
if(number % 2 == 0){counter++}
}
console.log(counter);

let count = 0;
let i = 0;
while (i < 20 ) {
let number = Number.parseInt(prompt("give a number:"));
if(number % 2 == 0){count++}

}
console.log(count);


// 5. Make a program that asks numbers from the user, 
// until user gives 0 and then program ends. In the end program 
// prints out average of the numbers.

let response, i=0;
do {response = Number.parseInt(prompt("give a number:"));
i+=response;
tally = 0;
}
while (response != 0 );

console.log("Average is ", i/(tally-1));


//6.  Make a program that asks 25 numbers from the user. 
// In the end program prints out average of the numbers.

let total = 0;
let number;
for (let i=0;i<25;i++) {
number = Number.parseInt(prompt("give a number:"));
total+=number;
}

console.log(total/25);


//7. . Make a program that asks first one number from the user. 
// After that the program asks: Do you want to continue giving numbers?(y/n). 
// If user answers y, the program continues to ask another number. 
// If user answers n, program ends. In the end program prints out average 
// of the numbers.

let number, response;
let total = 0; 
let count = 0;

do {number = Number.parseInt(prompt("give a number:"));
total += number;
count ++;
response = prompt("Do you want to continue giving numbers?(y/n) ")}
while (response == "y");

console.log(total/count);

//8. Make a program that asks first how many numbers user wants to give 
//to the program. After that program asks those numbers. In the end program 
//prints out the smallest number that user gave.

let rep = Number.parseInt(prompt("How many numbers do you want to give?:"));
let memory = '';

while (rep !=0 ) {
    let newNum = prompt("Give a number: ");
    memory = memory + " " + newNum;
    rep = rep - 1;  
}
console.log(memory);

function sort() {
    for (let j=0;j<memory.length;j++){
    console.log(memory[j]);
    for (let i=0; i<memory.length;i++){
        if (Number(memory[j]) < Number(memory[i])) {
            memory.replace(memory[i], memory[j]);
        }
    } 
   return memory;
}
}
sort();
console.log(memory);

///// second attempt
let rep = Number.parseInt(prompt("How many numbers do you want to give?:"));
let progress = 0;
do{
    let newNum = prompt("Give a number: ");
    rep = rep - 1;  
    if (progress != 0){
        if (){}
        progress = newNum;}
    
}
while (rep !=0 ) 




//9. Make a program that asks ten numbers and in the end prints out two biggest //numbers.                                                                                        

let max;
let number, turn = 0;
do {number = Number.parseInt(prompt("Give a number: "))
turn++;
max=number;
if (number > max){ max = number;}
}
while(turn<10);
console.log("biggest number is:", max);

//10. Make a program that asks ten numbers. Program calculates and prints 
// out sum and average, also prints out the smallest and biggest number.
let total = 0;
let x;

for (let i = 0; i<10; i++){
    x = Number.parseInt(prompt("Ask a number: "));
total = total + x;
}

console.log("sum is", total);
console.log("average is", total / 10);



let bla = "the quick brown fox";
bla.replace("the", "a");
console.log(bla);




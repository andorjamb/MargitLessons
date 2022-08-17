loops/loops.md


//1.

for(i=1;i<100;i+=2) {
console.log(i);
}

//2.

let value = 100;
let string = "";
for (i=2;i<51;i+=2) {
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



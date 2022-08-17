function testPositive(){
let a,b,c;
a = Number.parseInt(prompt("Give a number:"));
b = Number.parseInt(prompt("Give a second number:"));
c = Number.parseInt(prompt("Give a third number:"));

if (a>=0|| b>=0|| c>=0 ){
    console.log(a + b + c);
}
if (a>=0 && b>=0 && c>=0 ){
console.log(a * b * c);
}
else if(a<0 && b<0 && c<0 ){
    return console.log("There were no positive numbers.");
}
}

testPositive();









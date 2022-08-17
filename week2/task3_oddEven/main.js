let ans = 1;
let n;

function getNumber() {
    n = Number.parseInt(prompt("Please give a positive number: ")); 
    if(n<=0){
        ans = 1;
    }
    else {ans = 0;}
}

getNumber();
while (ans == 1){
    if (n<=0){
        n = Number.parseInt(prompt("That is not positive. Please give a positive number: ")); 
        if (n>0){
            ans==0;
            break;
        }
    getNumber();
}
}
if (n % 2 == 0){
    console.log("Number is even. ");
alert("Number is even. ");
}
else {console.log("Number is odd. ");
alert("Number is odd. ");}
 
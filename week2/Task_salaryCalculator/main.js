
let salary, hours, salaryTotal;

function getSalary() {
    salary = Number.parseInt(prompt("What is your hourly salary?")); }

function getHours() {
        hours = Number.parseInt(prompt("How many hours did you work?")); }


function calculateSalary() {
    if (0< hours && hours <=7) {
        return salaryTotal = hours * salary;
    } 
    else if (hours > 7){
        if ((hours - 7) <= 2){
            return salaryTotal = (7 * salary +(hours -7)* salary * 1.5)  
    }
    else {return salaryTotal = (
        (7 * salary) +
        (2 * (salary * 1.5)) + 
        ((hours-9)*(salary *2))
        )}

}
}
getSalary();
getHours();
calculateSalary();

console.log("You have earned ", salaryTotal, "euros.");
alert(`You have earned ${salaryTotal} euros.`);




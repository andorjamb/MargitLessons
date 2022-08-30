

let fahrenheit = Number(document.getElementById("fahrenheit").value);
let kelvin = Number(document.getElementById("kelvin").value);
function converter(id, val) {
    val = parseFloat(val);
    console.log(id, val);
    let celsius = Number(document.getElementById("celsius").value);
    document.getElementById("fahrenheitOutput").innerHTML = (celsius * 1.8 + 32);
cd
    if (celsius.value) { fahrenheit.textContent = (celsius * 1.8 + 32) } // C to F


    if (fahrenheit.value) {
        celsius.textContent = ((fahrenheit - 32) * 5 / 9); //F to C
        kelvin.textContent = ((fahrenheit - 32) * 5 / 9)  // F to K
    }

    if (kelvin.value) {

    }
}

// (kelvin - 273.15) * 9/5 + 32    K to F
// (fahrenheit - 32)* 5/9 + 273.15  F to K



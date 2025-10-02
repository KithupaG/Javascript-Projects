//Calculator Program

const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}


function calculate() {
    try {
        display.value = eval(display.value).toFixed(2);
    }catch {
        display.value = "Error";
    }
}

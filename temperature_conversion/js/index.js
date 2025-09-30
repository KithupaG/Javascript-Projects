const temp = document.getElementById('temp');
const toFahrenheit = document.getElementById('toFahrenheit');
const toCelcius = document.getElementById('toCelcius');
const result = document.getElementById('result');

let tmp;

function convert() {
    if(toFahrenheit.checked) {
        result.innerText = (Number(temp.value) * 9/5) + 32 + "°F";
    }else if(toCelcius.checked) {
        result.innerText = (Number(temp.value) - 32) * 5/9 + "°C";
    }else {
        result.innerText = "Please select a conversion type.";
    }
}

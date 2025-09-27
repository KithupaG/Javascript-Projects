var num = document.getElementById("number1");
var num1 = document.getElementById("number2");
var num2 = document.getElementById("number3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;


function generate() {
    const randomNum1 = Math.floor(Math.random()*max) + min;
    const randomNum2 = Math.floor(Math.random()*max) + min;
    const randomNum3 = Math.floor(Math.random()*max) + min;

    num.innerText = randomNum1;
    num1.innerText = randomNum2;
    num2.innerText = randomNum3;
}

function reset() {
    num.innerText = 0;
    num1.innerText = 0;
    num2.innerText = 0;
}

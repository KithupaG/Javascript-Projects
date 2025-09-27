var num = document.getElementById("number");

function generate() {
    const randomNum = Math.floor(Math.random()*100 + 1);
    num.innerText = randomNum;
}

function reset() {
    num.innerText = 0;
}

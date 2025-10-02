const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)]
    let result = "";

    if(playerChoice === computerChoice) {
        result = "TIE!";
    }else {
        switch(playerChoice) {
            case "rock" :
                result = (computerChoice === "scissors") ? result = "YOU WIN..." : result = "YOU LOST!";
                break;
            case "paper" :
                result = (computerChoice === "rock") ? result = "YOU WIN..." : result = "YOU LOST!";
                break;
            case "scissors" :
                result = (computerChoice === "paper") ? result = "YOU WIN..." : result = "YOU LOST!";
                break;
        }
    }

    playerDisplay.textContent = `PLAYAH: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText");
    resultDisplay.classList.remove("redText");

    switch(result) {
        case "YOU WIN NIGGA..." :
            resultDisplay.classList.add("greenText");
            break;
        case "YOU LOST BIATCH!" :
            resultDisplay.classList.add("redText");
            break;
    }
}

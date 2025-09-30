const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
let attempts = 0;
let guessed;
let running = true;

while(running) {
    guess = window.prompt(`Enter a number between ${minNum} and ${maxNum}`);
    guess = Number(guess);


    if(isNaN(guess)) {
        window.alert("That's not a number!");
        continue;
    }else if(guess < minNum || guess > maxNum) {
        window.alert("Number out of range!");
    }else {
        attempts++
        if(guess == answer) {
            window.alert(`You guessed it! The number was ${answer}. It took you ${attempts} attempts.`);
        }else if(guess < answer){
            window.alert("Too low! Try again.");
        }else if(guess > answer) {
            window.alert("Too high! Try again.");
        }else {
            window.alert("Answer is correct!, the answer was {anser}");
            running = false;
        }
    }

    running = false;
}



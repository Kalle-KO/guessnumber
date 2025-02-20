function out(any) { console.log(any)}
out("ready to guess")

const lblMessage = document.querySelector(".message");
out(lblMessage);
const lblNumber = document.querySelector(".number");
out(lblNumber);
const lblScore = document.querySelector(".score");
out(lblScore);
const inpGuess = document.querySelector(".guess");
out(inpGuess);
const lblHighscore = document.querySelector(".highscore");
out (lblHighscore);

let score = 20;
let highscore = 0;


function checkNumber(btn) {
    out("check number")
    let guess = inpGuess.value;
    out("Guess= " + guess)
    if (guess > secretNumber) {
        lblMessage.textContent = "Value is too high, -1 point"
        score -=1;
        lblScore.textContent = score;
    } else {
        if (guess < secretNumber) {
            lblMessage.textContent = "Value is too low, -1 point"
            score -=1;
            lblScore.textContent = score;
        } else {
            lblMessage.textContent = "You guessed the number 🍟"
        }
    }
}

let secretNumber = 0;
function getSecretNumber(btn) {
    out("start secret");

    if (score > highscore) {
        highscore = score;
        lblHighscore.textContent = highscore;
    }

    secretNumber = Math.trunc(Math.random() * 20) + 1;
    out("Secret number = " + secretNumber);
    score = 20;
    lblScore.textContent = score;

    lblMessage.textContent = "Start guessing...";
    inpGuess.value = "";
}


const pbCheck = document.querySelector(".check")
pbCheck.addEventListener('click', checkNumber)
const pbAgain = document.querySelector(".again")
pbAgain.addEventListener('click', getSecretNumber)

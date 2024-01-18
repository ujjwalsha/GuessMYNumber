"use strict";

let againBtn = document.querySelector("[again-btn]");
let checkBtn = document.querySelector("[check-btn]");
let messageDisplay = document.querySelector(".message");
let guessNumber = document.querySelector(".guess");
let unknownNumber = document.querySelector(".unknown-number");
let container = document.querySelector(".container");
let wrapper = document.getElementById("wrapper");
let scoreDisplay = document.querySelector(".Score");
let highScore = document.querySelector(".highscore");
//random number
function randomNumber() {
  return Math.trunc(Math.random() * 20);
}
// console.log(randomNumber());

let score = 20;
let highscore = 0;
scoreDisplay.textContent = 20;
// unknownNumber.innerHTML = randomNumber();
let secretNumber = 12;
console.log(secretNumber);

const checkGuesses = function () {
  let guess = Number(guessNumber.value);

  if (!guess) {
    messageDisplay.innerText = "⛔ no number";
  } else if (secretNumber == guess) {
    unknownNumber.innerHTML = secretNumber;
    messageDisplay.innerHTML = "correct Number 🥳";
    container.style.backgroundColor = "green";
    if (score > highscore) {
      highscore = score;
      highScore.textContent = highscore;
    }
    console.log("you are in ");
  } else if (secretNumber < guess) {
    if (score > 1) {
      messageDisplay.innerHTML = "too High! 😮";
      score--;
      scoreDisplay.textContent = score;
    } else {
      messageDisplay.innerHTML = "you lost the game! 😪";
      scoreDisplay.textContent = 0;
      container.style.backgroundColor = "red";
    }
  } else if (secretNumber > guess) {
    if (score > 1) {
      messageDisplay.innerHTML = "too Low! 🙁";
      score--;
      scoreDisplay.textContent = score;
    } else {
      messageDisplay.innerHTML = "you lost the game! 😪";
      scoreDisplay.textContent = 0;
      container.style.backgroundColor = "red";
    }
  }
};

checkBtn.addEventListener("click", checkGuesses);

againBtn.addEventListener("click", function () {
  secretNumber = randomNumber();
  console.log(secretNumber);
  container.style.backgroundColor = "#2d2f31";
  messageDisplay.innerHTML = "Start guessing......";
  unknownNumber.innerHTML = "?";
  guessNumber.value = "";
});

document.addEventListener("keydown", function (e) {
  console.log(e);

  if (e.keyCode == 13) {
    checkGuesses();
    // checkBtn.addEventListener('click', checkGuesses);
  } else if (e.keyCode >= 97 && e.keyCode <= 105) {
    guessNumber.value += e.key;
  } else if (e.keyCode == 8) {
    guessNumber.value = "";
  }
});

guessNumber.value = "";

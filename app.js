"use strict";

let againBtn = document.querySelector("[again-btn]");
let checkBtn = document.querySelector("[check-btn]");
let messageDisplay = document.querySelector(".message");
let guessNumber = document.querySelector(".guess");
let unknownNumber = document.querySelector(".unknown-number");
let container = document.querySelector(".container");
let wrapper = document.getElementById("wrapper");
let scoreDisplay = document.querySelector(".Score");
let highScoreDisplay = document.querySelector(".highscore");
//random number
function randomNumber() {
  return Math.trunc(Math.random() * 20);
}
// console.log(randomNumber());

let score = 20;
let highScore = 0;
scoreDisplay.textContent = 20;
let secretNumber = 12;
console.log(secretNumber);

const displayMesssage = function (message) {
  messageDisplay.textContent = message;
};

checkBtn.addEventListener("click", function () {
  let guess = Number(guessNumber.value);
  if (!guess) {
    displayMesssage("⛔ no number!");
  } else if (secretNumber == guess) {
    unknownNumber.innerHTML = secretNumber;
    displayMesssage("correct Number 🥳");
    container.style.backgroundColor = "green";
    console.log("you are in ");

    if (score > highScore) {
      highScore = score;
      highScoreDisplay.textContent = highScore;
    }
  } else if (guess != secretNumber) {
    if (score > 1) {
      messageDisplay.innerHTML =
        guess > secretNumber ? "too High! 😮" : "too Low! 🙁";
      score--;
      scoreDisplay.textContent = score;
    } else {
      displayMesssage("you lost the game! 😪");
      scoreDisplay.textContent = 0;
      container.style.backgroundColor = "red";
    }
  }
});

againBtn.addEventListener("click", function () {
  secretNumber = randomNumber();
  container.style.backgroundColor = "#2d2f31";
  console.log(secretNumber);
  displayMesssage("Start guessing......");
  unknownNumber.innerHTML = "?";
  scoreDisplay.textContent = 20;
  score = 20;
  guessNumber.value = "";
});

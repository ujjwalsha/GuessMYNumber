"use strict";

let againBtn = document.querySelector("[again-btn]");
let checkBtn = document.querySelector("[check-btn]");
let messageDisplay = document.querySelector(".message");
let guessNumber = document.querySelector(".guess");
let unknownNumber = document.querySelector(".unknown-number");
let container = document.querySelector(".container");
let wrapper = document.querySelector(".wrapper");
let scoreDisplay = document.querySelector(".Score");
let highScore = document.querySelector(".highscore");
const checkbox = document.querySelector(".check");
const moon = document.querySelector(".fa-sun");

//random number
function randomNumber() {
  return Math.trunc(Math.random() * 50);
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
  // console.log(e);

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

moon.classList.add("fa-moon");
container.style.color = "#222";
let cnt = 0;
checkBtn.style.backgroundColor = "#262a33";
checkBtn.style.color = "blanchedalmond";
againBtn.style.backgroundColor = "#262a33";
againBtn.style.color = "blanchedalmond";

checkbox.addEventListener("click", function () {
  console.log("hello");
  moon.classList.toggle("fa-moon");
  wrapper.classList.toggle("color");
  container.classList.toggle("color");

  cnt++;
  console.log(cnt);
  if (cnt % 2 == 0) {
    container.style.color = "#222";
    checkBtn.style.backgroundColor = "#262a33";
    checkBtn.style.color = "blanchedalmond";
    againBtn.style.backgroundColor = "#262a33";
    againBtn.style.color = "blanchedalmond";
  } else {
    container.style.color = "blanchedalmond";
    checkBtn.style.backgroundColor = "blanchedalmond";
    checkBtn.style.color = "#222";
    againBtn.style.backgroundColor = "blanchedalmond";
    againBtn.style.color = "#222";
  }
});

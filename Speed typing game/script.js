window.addEventListener("load", init);

// DOM elements
const levelsSelector = document.querySelector("#levels");
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

// Available levels
const levels = {
  easy: 5,
  medium: 3,
  hard: 1,
};
let currentLevel;
levelsSelector.addEventListener("click", function (e) {
  switch (e.target.value) {
    case "easy":
      currentLevel = levels.easy;
      console.log(currentLevel);
      break;
  }
});
currentLevel = levels.easy;
// Globals
console.log(currentLevel);
// to chage levels
let time = currentLevel;
let score = 0;
let isPlaying;

timeDisplay.innerHTML = time;
const words = [
  "daniel",
  "sharon",
  "mmesoma",
  "miriam",
  "manuela",
  "chelsea",
  "david",
  "goliath",
  "chidera",
  "damilola",
  "tobi",
  "hehe",
  "heat",
  "river",
];

let scores = new Array();
// Initialize game
function init() {
  // Show number of seconds
  seconds.innerHTML = currentLevel;
  // load word from array
  showWord(words);
  //Start matching on word input
  wordInput.addEventListener("input", startMatch);
  // Call countdown every second
  setInterval(countdown, 1000);
  // Check game status
  setInterval(checkStatus, 50);
}
// Start match
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = "";
    score++;
  }
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}
// Match current word to worrdInput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "Correct !!!";
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
}
// Pick and show random word
function showWord(array) {
  // Generate random array index
  const randIndex = Math.floor(Math.random() * array.length);
  //Output random word
  currentWord.innerHTML = array[randIndex];
}
// countdown timer
function countdown() {
  // Make sure time does not run out
  if (time > 0) {
    // Decrese the time
    time--;
  } else if (time === 0) {
    // Game is over
    isPlaying = false;
  }
  // Show time
  timeDisplay.innerHTML = time;
}
// Check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = "Game Over !!!";
    score = -1;
  }
}

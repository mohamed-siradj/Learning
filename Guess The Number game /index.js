let msg1 = document.getElementById("message1");
let msg2 = document.getElementById("message2");
let msg3 = document.getElementById("message3");

let randomNumber = Math.floor(Math.random() * 10) + 1;
let numOfGuesses = 0;
let guessedNums = [];

function play() {
  let userGuess = document.getElementById("number").value;
  if (userGuess < 1 || userGuess > 10) {
    alert("please enter num between 1 and 10");
  } else {
    guessedNums.push(userGuess);
    numOfGuesses += 1;

    if (userGuess < randomNumber) {
      msg1.textContent = "your guess is too low";
      msg2.textContent = "no.of guesses: " + numOfGuesses;
      msg3.textContent = "guessed nums are: " + guessedNums;
    } else if (userGuess > randomNumber) {
      msg1.textContent = "your guess is too high";
      msg2.textContent = "no.of guesses: " + numOfGuesses;
      msg3.textContent = "guessed nums are: " + guessedNums;
    } else if (userGuess == randomNumber) {
      msg1.textContent = "you win ";
      msg2.textContent = "the number was " + randomNumber;
      msg3.textContent = "you guessed it in " + numOfGuesses + " guesses";
      document.getElementById("guess").disabled = true;
    }
  }
}
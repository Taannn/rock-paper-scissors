//picking the elements
const displayComputerChoice = document.getElementById('computer-choice');
const displayUserChoice = document.getElementById('user-choice');
const displayResult = document.getElementById('result');
// get all the possible choices
const possibleChoices = document.querySelectorAll('button');
//global variables that is used for storing stuff
let userChoice;
let computerChoice;
let result;

// grabbing the button                                                        e for event
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id;                      // whenever I click, it gets saved to userChoice
  displayUserChoice.innerHTML = userChoice;      // actually ddisplaying it

  generateComputerChoice();                      // generating the computer choice
  getResult();                                   // to generate result
}))

// function to do so
function generateComputerChoice() {
  // generating random number and using Math.floor to round it down, and + 1 for added readability
  const randomNumber = Math.floor(Math.random() * 3) + 1;         //or possibleChoices.length
  console.log(randomNumber);

  if (randomNumber === 1) {
    computerChoice = 'rock';
  } else if (randomNumber === 2) {
    computerChoice = 'paper';
  } else {
    computerChoice = 'scissors';
  }
  displayComputerChoice.innerHTML = computerChoice;                // displaying it
}

// funtion to get the result about who wins
function getResult() {
  if (computerChoice === userChoice) {
    result = "It's a Draw";
  }
  if (computerChoice === 'rock' && userChoice === 'paper') {
    result = "You win!";
  }
  if (computerChoice === 'rock' && userChoice === 'scissors') {
    result = "You lost!";
  }
  if (computerChoice === 'paper' && userChoice === 'rock') {
    result = 'You lost!';
  }
  if (computerChoice === 'paper' && userChoice === 'scissors') {
    result = 'You win!';
  }
  if (computerChoice === 'scissors' && userChoice === 'paper') {
    result = 'You lost!';
  }
  if (computerChoice === 'scissors' && userChoice === 'rock') {
    result = 'You win!';
  }
  displayResult.innerHTML = result;
}
//picking the elements
const displayComputerChoice = document.getElementById('computer-choice');
const displayUserChoice = document.getElementById('user-choice');
const displayResult = document.getElementById('result');
// get all the possible choices
const possibleChoices = document.querySelectorAll('button');
//
let userChoice;

// grabbing the button                                                        e for event
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  // whenever I click, it gets saved to userChoice
  userChoice = e.target.id;
  //
  displayUserChoice.innerHTML = userChoice;
}));

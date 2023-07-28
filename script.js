'use strict';

// Calculate the Random No. :
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Intially score and highscore would be this :
let score = 20;
let highscore = 0;

// Mostly used DOM Selector so declared as Variable for ease : 
let numberClass = document.querySelector('.number');
let scoreClass = document.querySelector('.score');

// Display Message is made as a function because Content will change :
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Checking the onClick Event of Check Button :
document.querySelector('.check').addEventListener('click', function () {
  let numberToCheck = Number(document.querySelector('.guess').value);

  // If not a number empty then : 
  if (!numberToCheck) {
    displayMessage('Please enter the number 😁');
  } 
  
  // If the condition is satisfied : 
  else if (numberToCheck === secretNumber) {
    displayMessage('Yohooo ! Won the game 🎊');
    document.querySelector('body').style.backgroundColor = '#60b347';
    numberClass.style.width = '30rem';
    numberClass.textContent = secretNumber;
  
   // Checking the highscore if current score is bigger then update :  
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
    // Checking if the number is high or low :
   
    else {

    // score should be greater than one else no play :
    if (score > 1) {
      displayMessage(
        numberToCheck > secretNumber ? '📈 Too high!' : '📉 Too low!'
      );
      score--;
      scoreClass.textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      scoreClass.textContent = 0;
    }
  }
  
});

// Reseting the values to the original Ones :
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing....');

  scoreClass.textContent = score;

  document.querySelector('body').style.backgroundColor = '#222';

  numberClass.style.width = '15rem';
  numberClass.textContent = '?';

  document.querySelector('.guess').value = '';
});

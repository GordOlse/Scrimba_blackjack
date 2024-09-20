// 1. Create two variables, firstCard and secondCard.
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards

let firstCard, secondCard, sum;
let hasBlackjack = false;
let isAlive = true;
let message = '';

firstCard = Math.floor(Math.random() * 12) + 2;
secondCard = Math.floor(Math.random() * 12) + 2;

sum = firstCard + secondCard;

function startGame() {
  if (sum <= 20) {
    message = 'Do you want to draw another card?';
  } else if (sum === 21) {
    message = 'BLACKJACK!';
    hasBlackjack = true;
  } else {
    message = 'Sorry, you lose!';
    isAlive = false;
  }

  console.log(message);
}

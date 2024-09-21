// 1. Create two variables, firstCard and secondCard.
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards

let firstCard, secondCard, sum;
let cards = [];
let hasBlackjack = false;
let isAlive = true;
let message = '';
let messageEL = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');
let addCards = document.getElementById('additional-cards');

firstCard = Math.floor(Math.random() * 11) + 2;
secondCard = Math.floor(Math.random() * 11) + 2;
cards = [firstCard, secondCard];

sum = firstCard + secondCard;

function startGame() {
  renderGame();
}

function renderGame() {
  cardsEl.textContent = 'Cards: ' + cards;
  sumEl.textContent = 'Sum: ' + sum;

  if (sum <= 20) {
    message = 'Do you want to draw another card?';
  } else if (sum === 21) {
    message = 'BLACKJACK!';
    hasBlackjack = true;
  } else {
    message = 'Sorry, you lose!';
    isAlive = false;
  }

  messageEL.textContent = message;
}

function newCard() {
  console.log('Drawing another card from the deck');

  let newCard = Math.floor(Math.random() * 11) + 2;

  cards.push(newCard);

  sum += newCard;

  renderGame();
}

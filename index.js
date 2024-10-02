// 1. Create two variables, firstCard and secondCard.
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards

let player = {};
let firstCard, secondCard, sum;
let cards = [];
let hasBlackjack = false;
let isAlive = false;
let message = '';
let messageEL = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');
let addCards = document.getElementById('additional-cards');
let playerEl = document.getElementById('player-el');

player.name = prompt('What is your name?');
player.chips = prompt('How much chips do you have?');
playerEl.textContent = player.name + ' $' + player.chips;

function getRandomCard() {
  let randCard = Math.floor(Math.random() * 11) + 1;

  if (randCard == 1) {
    return 11;
  } else if (randCard >= 11) {
    return 10;
  } else {
    return randCard;
  }
}
function startGame() {
  isAlive = true;

  firstCard = getRandomCard();
  secondCard = getRandomCard();
  cards = [firstCard, secondCard];

  sum = firstCard + secondCard;

  renderGame();
}

function renderGame() {
  cardsEl.textContent = 'Cards: ';

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + ' ';
  }

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
  if (isAlive && !hasBlackjack) {
    let newCard = getRandomCard();
    cards.push(newCard);
    sum += newCard;
    renderGame();
  } else {
    return;
  }
}

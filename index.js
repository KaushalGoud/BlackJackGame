const getRandomCard = () => {
  const number = Math.floor(Math.random() * 13) + 1; // 1 to 13

  if (number === 1) {
    return 11; // Ace counts as 11
  } else if (number > 10) {
    return 10; // Face cards (Jack, Queen, King) count as 10
  } else {
    return number; // 2 through 10 return their own value
  }
};
let data = {
  name: "Kaushal",
  chips: 255,
};

playerEl = document.getElementById("player-el");
playerEl.textContent = `${data.name}: $ ${data.chips}`;

let firstCard;
let secondCard;
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
console.log(cards);
const renderGame = () => {
  cardsEl.textContent = "Cards:";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += `${cards[i]} `;
  }
  sumEl.textContent = "Sum:" + sum;
  if (sum < 21) {
    message = "Do you want to draw ?";
  } else if (sum === 21) {
    hasBlackJack = true;
    message = "You hit blackjack";
  } else {
    isAlive = false;
    message = "You lost!!";
  }
  messageEl.textContent = message;
};
function startGame() {
  isAlive = true;
  firstCard = getRandomCard();
  secondCard = getRandomCard();
  cards.push(firstCard);
  cards.push(secondCard);
  sum = firstCard + secondCard;
renderGame();
}
const newCard = () => {
  if (isAlive || hasBlackJack) {
    let newCard = getRandomCard();
    sum += newCard;
    cards.push(newCard);

    renderGame();
  }
};

function restartGame() {
  messageEl.textContent = "Start the game";
  sumEl.textContent = "Sum:";
  isAlive = false;
  cardsEl.textContent = "Cards:";
}

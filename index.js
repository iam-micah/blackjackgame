let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let player = {
    name: "Micah",
    chips: 145
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;
function getRandomCard() {
    let number = Math.floor(Math.random() * 13) + 1;
    if (number == 1) {
        number = 11;
    } else if (number > 10) {
        number = 10;
    }
    return number; 
}

function startGame() {
    isAlive = true;
    cards.push(getRandomCard());
    cards.push(getRandomCard());
    sum = cards[0] + cards[1];
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
    message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!";
        hasBlackJack = true;
    } else { 
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard () {
    if (isAlive && !hasBlackJack){
        console.log("Drawing a new card from the deck");
        let card = getRandomCard();
        sum += card;
        cards.push(card);

        renderGame();
    }
}
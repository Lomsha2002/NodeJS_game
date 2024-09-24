const fs = require('fs');

// Loading data from JSON file
const loadData = () => {
  const data = fs.readFileSync('./data.json', 'utf-8');
  return JSON.parse(data);
};

// Saving data to JSON file
const saveData = (data) => {
  fs.writeFileSync('./data.json', JSON.stringify(data, null, 2));
};

// Generating a full deck of 52 cards
const generateDeck = () => {
  const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
  const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  const deck = [];

  suits.forEach(suit => {
    values.forEach(value => {
      deck.push(`${value} of ${suit}`);
    });
  });

  return deck;
};

module.exports = {
  loadData,
  saveData,
  generateDeck
};

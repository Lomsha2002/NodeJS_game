const { v4: uuidv4 } = require('uuid');
const { loadData, saveData, generateDeck } = require('../helpers/helper');

// Creating a new session for a new user
const createSession = (req, res) => {
  const data = loadData();
  const hash_id = uuidv4();
  const deck = generateDeck();

  data.sessions[hash_id] = {
    deck,
    remainingCards: deck.length
  };
  saveData(data);
  res.json({ hash_id, message: 'Session started successfully!' });
};

module.exports = {
  createSession
};

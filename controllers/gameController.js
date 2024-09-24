const { loadData, saveData } = require('../helpers/helper');

// Function for drawing 4 random cards from remaining cards
const drawCards = (req, res) => {
    const { hash_id } = req.query;
    const data = loadData();
    if (!data.sessions[hash_id]) {
        return res.status(401).json({ message: 'Unauthorised' });
    }
    let { deck, remainingCards } = data.sessions[hash_id];
    if (remainingCards === 0) {
        return res.json({ message: 'Game over' });
    }

    //Generating random 4 cards
    const drawnCards = [];
    for (let i = 0; i < 4 && deck.length > 0; i++) {
        const randomIndex = Math.floor(Math.random() * deck.length);
        drawnCards.push(deck.splice(randomIndex, 1)[0]);
    }

    //Saving the data
    data.sessions[hash_id].deck = deck;
    data.sessions[hash_id].remainingCards = deck.length;
    saveData(data);
    res.json({ drawnCards, remainingCards: deck.length });
};

module.exports = {
    drawCards
};

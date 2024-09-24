const express = require('express');
const app = express();

const sessionController = require('./controllers/sessionController');
const gameController = require('./controllers/gameController');

app.use(express.json());

app.post('/start-session', sessionController.createSession);
app.post('/draw-cards', gameController.drawCards);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

# Card Game API

This is a simple card game API built using Node.js and Express. It allows users to start a new game session and draw 4 random cards from a 52-card deck. The game tracks the remaining cards in each session, and it will return a "Game Over" message when no more cards are available. It uses mock data stored in a JSON file to manage session data.

## Features

- **Create a new session**: Starts a new game session with a 52-card deck.
- **Draw cards**: Fetches 4 random cards from the remaining deck of cards in the user's session.
- **End game**: If no cards remain in the deck, it returns a "Game Over" message.
- **Unauthorized access**: If no valid session exists for a user, it returns "Unauthorized".

## Endpoints

### 1. Create New Session

**URL**: `/start-session`  
**Method**: `POST`  
**Description**: Creates a new session for a user with a 52-card deck.

**Response**:
```json
{
  "hash_id": "unique_session_hash"
}
```

### 2. Draw Cards

**URL**: `/draw-cards?hash_id=your_hash_id`  
**Method**: `GET`  
**Description**: Draws 4 random cards from the remaining deck. Returns "Game Over" if no cards remain, or "Unauthorized" if the session is invalid.

**Response** (if successful):
```json
{
  "drawnCards": ["4 of Hearts", "2 of Diamonds", "Ace of Spades", "King of Clubs"],
  "remainingCards": 48
}
```

**Response** (if no cards remain):
```json
{
  "message": "Game over"
}
```

**Response** (if unauthorized):
```json
{
  "message": "Unauthorized"
}
```

## Project Structure

```
/controllers
  - sessionController.js   # Contains session-related logic
  - gameController.js      # Contains game-related logic (drawing cards)
  
/helpers
  - helper.js              # Helper functions for loading and saving session data

/data
  - sessions.json          # Stores the session data (mock data)

app.js                     # Main Express app file
README.md                  # Project documentation
```

## How to Run the Project

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/card-game-api.git
   cd card-game-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   npm start
   ```

4. The server will start on `http://localhost:3000`.

## How to Use

1. **Create a new session**:
   - Send a `POST` request to `/start-session` to start a new game session.
   - The response will return a `hash_id` that you'll use to draw cards.

2. **Draw cards**:
   - Use the `hash_id` returned from the session and send a `GET` request to `/draw-cards?hash_id=your_hash_id`.
   - You'll receive 4 random cards from the remaining deck. Continue making requests until all cards are drawn or until you receive a "Game Over" message.

## Sample Requests

### Create a New Session

```bash
curl -X POST http://localhost:3000/start-session
```

### Draw Cards

```bash
curl -X GET "http://localhost:3000/draw-cards?hash_id=your_hash_id"
```

## Dependencies

- **express**: Fast, unopinionated, minimalist web framework for Node.js.
- **fs**: Native Node.js module to work with the file system.

## Future Enhancements

- Add user authentication and session management.
- Store session data in a real database instead of a JSON file.
- Improve error handling and logging.

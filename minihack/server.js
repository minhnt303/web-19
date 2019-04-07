const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const GameModel = require('./models/game.models.js');
const path = require('path');
const cors = require('cors');
mongoose.connect('mongodb://localhost:27017/minihack', (error) => {
  if (error) {
    throw error;
  }
  console.log('Connect to Mongodb success');

  const server = express();
  server.use(express.static('public'));
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(bodyParser.json());
  server.use(cors({}))

  // routes
  server.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, './public/html/create-game.html'));
  });

  server.get('/games/:gameId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, './public/html/game-scores.html'));
  });

  server.post('/api/games', async (req, res) => {
    try {
      const players = req.body.players;
      const newGame = await GameModel.create({
        players: JSON.parse(players),
        scores: [],
      });

      res.status(201).json(newGame);
    } catch (error) {
      res.status(error.status || 500).end(error.message || 'Internal server error');
    }
  });

  server.get('/api/games/:gameId', async (req, res) => {
    try {
      const { gameId } = req.params;
      const gameInfo = await GameModel.findById(gameId).exec(); 
      res.status(200).json(gameInfo);
    } catch (error) {
      res.status(error.status || 500).end(error.message || 'Internal server error');
    }
  });

  server.put('/api/games/:gameId', async (req, res) => {
    try {
      const { gameId } = req.params;
      const existedGame = await GameModel.findOne({_id: gameId}).exec();

      if (!existedGame) {
        res.status(404).end('Game not found');
      } else {
        if (req.body.type === 'add_round') {
          await GameModel.findByIdAndUpdate(gameId, {$set: {
            scores: [...existedGame.scores, [0, 0, 0, 0]],
          }}).exec();
          res.status(200).end();
        } else {
          const newScores = existedGame.scores;
          newScores[req.body.row][req.body.col] = req.body.value;

          await GameModel.findByIdAndUpdate(gameId, {$set: {
            scores: newScores,
          }}).exec();
          res.status(200).end();
        }
      }
    } catch (error) {
      res.status(error.status || 500).end(error.message || 'Internal server error');
    }
  });

  server.listen(3001, (error) => {
    if (error) {
      throw error;
    }
    console.log('Server listen on port 3001...');
  });
});
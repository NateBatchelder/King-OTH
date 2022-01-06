import Game from "./rank.js";
import GameView from "./rankUI.js";

let game = new Game();
let gameView = new GameView(document.getElementById("app"));

// define functions
gameView.onTileClick = function (i) {
  game.makeMove(i);
  gameView.update(game);
  console.log(`Array tile ${i} clicked.`);
};

gameView.onRestartClick = function () {
  game = new Game();
  gameView.update(game);
  console.log("Restart button clicked, game is restarted!");
};

// update the gameView with the game data
gameView.update(game);

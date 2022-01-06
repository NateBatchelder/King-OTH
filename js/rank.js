export default class Game {
  constructor() {
    this.turn = "X";
    this.board = new Array(9).fill(null); // 9 is the length of the array
  }

  nextTurn() {
    this.turn = this.turn === "X" ? "O" : "X";
  }

  makeMove(i) {
    // if the board is in progress, it makes the move and returns true.  If the board is not in progress, it returns false.
    if (!this.isInProgress()) {
      return;
    }
    // adds protection if the user tries to make a move on a cell that is already occupied
    if (this.board[i]) {
      return;
    }
    // adds the move to the board, and then changes the turn to the next player
    this.board[i] = this.turn;

    // if a winner has not been found, the next turn is applied
    if (!this.findWinningCombinations()) {
      this.nextTurn();
    }
  }

  findWinningCombinations() {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combination of winningCombinations) {
      let [a, b, c] = combination;

      if (
        this.board[a] &&
        this.board[a] === this.board[b] &&
        this.board[a] === this.board[c]
      ) {
        return combination;
      }
    }

    return null;
  }

  isInProgress() {
    // checks if the board has a winning combination and returns true if it does.  If the game is in progress, it returns false.
    return !this.findWinningCombinations() && this.board.includes(null);
  }
}

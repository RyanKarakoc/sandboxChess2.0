const { blackPieces } = require("../pieces/blackPieces");
const { whitePieces } = require("../pieces/whitePieces");

const isMoveBlocked = (movingScope, colourToMove) => {
  // loop through the moving scope
  for (let i = 0; i < movingScope.length; i++) {
    const tile = movingScope[i];
    // if tile has a piece
    if (tile.piece) {
      // if the last tile has oponents piece, move is not blocked
      if (i === movingScope.length - 1) {
        if (colourToMove === "white") {
          for (const piece in blackPieces) {
            if (tile.piece === blackPieces[piece]) {
              return false;
            }
          }
        }
        if (colourToMove === "black") {
          for (const piece in whitePieces) {
            if (tile.piece === whitePieces[piece]) {
              return false;
            }
          }
        }
      }
      // move is blocked
      return true;
    }
  }
  return false;
};

module.exports = { isMoveBlocked };

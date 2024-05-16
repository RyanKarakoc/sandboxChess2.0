const { blackPieces } = require("../pieces/blackPieces");
const { whitePieces } = require("../pieces/whitePieces");

const pawnMovedTwoTiles = (previousMove) => {
  const piece = previousMove[1];
  const [startColumn, startRow] = previousMove[2];
  const [endColumn, endRow] = previousMove[3];

  // if the piece is a pawn
  if (piece === whitePieces.pawn || piece === blackPieces.pawn) {
    // if the pawn hase moved 2 tiles from start
    if (endRow - startRow === 2 || endRow - startRow === -2) {
      return true;
    }
  }
  return false;
};

module.exports = { pawnMovedTwoTiles };

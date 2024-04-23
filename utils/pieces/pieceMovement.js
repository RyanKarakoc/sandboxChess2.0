const { pawnMovement } = require("./pawn/pawnMovement");

const pieceMovement = (
  startTile,
  endTile,
  currentBoardState,
  movingPiece,
  colourToMove
) => {
  if (movingPiece === "♙" || movingPiece === "♟︎") {
    if (pawnMovement(startTile, endTile, currentBoardState, colourToMove)) {
      return true;
    }
  }
};

module.exports = { pieceMovement };

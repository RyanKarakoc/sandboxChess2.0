const { whitePieces } = require("./whitePieces");
const { blackPieces } = require("./blackPieces");
const { pawnMovement } = require("./pawn/pawnMovement");

const pieceMovement = (
  startTile,
  endTile,
  currentBoardState,
  movingPiece,
  colourToMove
) => {
  // if colour to move is white look for white pieces
  if (colourToMove === "white") {
    // if the moving piece is a pawn run pawn movement
    if (movingPiece === whitePieces.pawn) {
      if (pawnMovement(startTile, endTile, currentBoardState, colourToMove)) {
        return true;
      }
    }
  }

  // if colour to move is white look for black pieces
  if (colourToMove === "black") {
    // if the moving piece is a pawn run pawn movement
    if (movingPiece === blackPieces.pawn) {
      if (pawnMovement(startTile, endTile, currentBoardState, colourToMove)) {
        return true;
      }
    }
  }
};

module.exports = { pieceMovement };

const { pawnMovement } = require("./pawn/pawnMovement");
const { rookMovement } = require("./rook/rookMovement");
const { knightMovement } = require("./knight/knightMovement");
const { bishopMovement } = require("./bishop/bishopMovement");
const { queenMovement } = require("./queen/queenMovement");
const { kingMovement } = require("./king/kingMovement");

const pieceMovements = {
  white: {
    "♙": pawnMovement,
    "♖": rookMovement,
    "♘": knightMovement,
    "♗": bishopMovement,
    "♕": queenMovement,
    "♔": kingMovement,
  },
  black: {
    "♟︎": pawnMovement,
    "♜": rookMovement,
    "♞": knightMovement,
    "♝": bishopMovement,
    "♛": queenMovement,
    "♚": kingMovement,
  },
};

const pieceMovement = (
  startTile,
  endTile,
  currentBoardState,
  movingPiece,
  colourToMove,
  previousMove
) => {
  // movement variable for the piece selected
  const movements = pieceMovements[colourToMove];

  // Handle invalid colour or piece type
  if (!movements || !movements[movingPiece]) {
    return false;
  }

  // if the piece is selected but not moved
  if (startTile === endTile) {
    return false;
  }

  return movements[movingPiece](
    startTile,
    endTile,
    currentBoardState,
    colourToMove,
    previousMove
  );
};

module.exports = { pieceMovement };

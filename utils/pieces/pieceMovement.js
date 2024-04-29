const { pawnMovement } = require("./pawn/pawnMovement");
const { rookMovement } = require("./rook/rookMovement");
const { knightMovement } = require("./knight/knightMovement");
const { bishopMovement } = require("./bishop/bishopMovement");

const pieceMovements = {
  white: {
    "♙": pawnMovement,
    "♖": rookMovement,
    "♘": knightMovement,
    "♗": bishopMovement,
  },
  black: {
    "♟︎": pawnMovement,
    "♜": rookMovement,
    "♞": knightMovement,
    "♝": bishopMovement,
  },
};

const pieceMovement = (
  startTile,
  endTile,
  currentBoardState,
  movingPiece,
  colourToMove
) => {
  const movements = pieceMovements[colourToMove];
  if (!movements || !movements[movingPiece]) {
    return false; // Handle invalid color or piece type
  }

  return movements[movingPiece](
    startTile,
    endTile,
    currentBoardState,
    colourToMove
  );
};

module.exports = { pieceMovement };

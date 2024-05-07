const { hasPieceCaptured } = require("../pieces/hasPieceCaptured");

const createMoveArray = (
  moveNumber,
  movingPiece,
  startTile,
  endTile,
  currentBoardState,
  colourToMove
) => {
  // Column of the startTile
  const startTileColumn = startTile.column;
  // Row of the startTile
  const startTilerow = startTile.row;
  // Checking if a piece has been captured at the end tile and formatting the column accordingly
  const endTileColumn = hasPieceCaptured(
    endTile,
    currentBoardState,
    colourToMove
  )
    ? `x${endTile.column}` // If piece has been captured add a "x"
    : endTile.column; // Otherwise, use the column letter directly

  // Row of the endTile
  const endTilerow = endTile.row;

  return [
    moveNumber,
    movingPiece,
    [startTileColumn, startTilerow],
    [endTileColumn, endTilerow],
  ];
};

module.exports = { createMoveArray };

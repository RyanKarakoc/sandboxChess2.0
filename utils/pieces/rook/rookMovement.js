const { isMoveBlocked } = require("../../movement/isMoveBlocked");
const { movingScope } = require("../../movement/movingScope");

const rookMovement = (startTile, endTile, currentBoardState, colourToMove) => {
  const sameColumn = endTile.column === startTile.column;
  const sameRow = endTile.row === startTile.row;

  const rookMoves = [
    { x: 0, y: 1 }, // rook is moving yPos
    { x: 0, y: -1 }, // rook is moving yNeg
    { x: 1, y: 0 }, // rook is moving xNeg
    { x: -1, y: 0 }, // rook is moving xPos
  ];

  // check scope is clear
  const tilesMovingOver = movingScope(startTile, endTile, currentBoardState);
  const moveBlocked = isMoveBlocked(tilesMovingOver, colourToMove);

  // loop through the possible moves for rook
  for (const move of rookMoves) {
    const yPos = move.x === 0 && move.y === 1;
    const yNeg = move.x === 0 && move.y === -1;
    const xPos = move.x === 1 && move.y === 0;
    const xNeg = move.x === -1 && move.y === 0;

    // if the move is not blocked
    if (!moveBlocked) {
      // for when the rook is moving yPos or yNeg
      if (yPos || yNeg) {
        // rook is on the same column
        if (sameColumn) {
          return true;
        }
      }
      // for when the rook is moving xPos or xNeg
      if (xPos || xNeg) {
        // rook is on the same row
        if (sameRow) {
          return true;
        }
      }
    }
  }
  return false;
};

module.exports = { rookMovement };

const { columnRef } = require("../../columnRef");
const { isMoveBlocked } = require("../../movement/isMoveBlocked");
const { movingScope } = require("../../movement/movingScope");

const kingMovement = (startTile, endTile, currentBoardState, colourToMove) => {
  const sameColumn = endTile.column === startTile.column;
  const sameRow = endTile.row === startTile.row;

  const kingMoves = [
    { x: -1, y: 1 }, // king is moving xNegYPos
    { x: 1, y: 1 }, // king is moving xPosYPos
    { x: -1, y: -1 }, // king is moving xNegYNeg
    { x: 1, y: -1 }, // king is moving xPosYNeg
    { x: 0, y: 1 }, // king is moving yPos
    { x: 0, y: -1 }, // king is moving yNeg
    { x: 1, y: 0 }, // king is moving xNeg
    { x: -1, y: 0 }, // king is moving xPos
  ];

  // check scope is clear
  const tilesMovingOver = movingScope(startTile, endTile, currentBoardState);
  const moveBlocked = isMoveBlocked(tilesMovingOver, colourToMove);

  for (const move of kingMoves) {
    if (!moveBlocked) {
      const xNegYPos = move.x === -1 && move.y === 1;
      const xPosYPos = move.x === 1 && move.y === 1;
      const xNegYNeg = move.x === -1 && move.y === -1;
      const xPosYNeg = move.x === 1 && move.y === -1;
      const yPos = move.x === 0 && move.y === 1;
      const yNeg = move.x === 0 && move.y === -1;
      const xPos = move.x === 1 && move.y === 0;
      const xNeg = move.x === -1 && move.y === 0;

      // variable for ensuring the king ends 1 tile on the x axis
      const xDestination =
        columnRef.indexOf(startTile.column) + move.x ===
        columnRef.indexOf(endTile.column);
      // variable for ensuring the king ends 1 tile on the y axis
      const yDestination = startTile.row + move.y === endTile.row;

      // for when the king is moving xNegYPos
      if (xNegYPos) {
        // endTile should be 1 tile from startTile
        if (xDestination && yDestination) {
          return true;
        }
      }
      // for when the king is moving xPosYPos
      if (xPosYPos) {
        // endTile should be 1 tile from startTile
        if (xDestination && yDestination) {
          return true;
        }
      }
      // for when the king is moving xNegYNeg
      if (xNegYNeg) {
        // endTile should be 1 tile from startTile
        if (xDestination && yDestination) {
          return true;
        }
      }
      // for when the king is moving xPosYNeg
      if (xPosYNeg) {
        // endTile should be 1 tile from startTile
        if (xDestination && yDestination) {
          return true;
        }
      }
      // for when the king is moving yPos or yNeg
      if (yPos || yNeg) {
        // king is on the same column
        if (sameColumn && xDestination && yDestination) {
          return true;
        }
      }
      // for when the king is moving xPos or xNeg
      if (xPos || xNeg) {
        // king is on the same row
        if (sameRow && xDestination && yDestination) {
          return true;
        }
      }
    }
  }
  return false;
};

module.exports = { kingMovement };

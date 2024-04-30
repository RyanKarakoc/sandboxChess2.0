const { columnRef } = require("../../columnRef");
const { isMoveBlocked } = require("../../movement/isMoveBlocked");
const { movingScope } = require("../../movement/movingScope");
const { numberOfTilesMoved } = require("../../movement/numberOfTilesMoved");

const queenMovement = (startTile, endTile, currentBoardState, colourToMove) => {
  const sameColumn = endTile.column === startTile.column;
  const sameRow = endTile.row === startTile.row;

  const queenMoves = [
    { x: -1, y: 1 }, // queen is moving xNegYPos
    { x: 1, y: 1 }, // queen is moving xPosYPos
    { x: -1, y: -1 }, // queen is moving xNegYNeg
    { x: 1, y: -1 }, // queen is moving xPosYNeg
    { x: 0, y: 1 }, // queen is moving yPos
    { x: 0, y: -1 }, // queen is moving yNeg
    { x: 1, y: 0 }, // queen is moving xNeg
    { x: -1, y: 0 }, // queen is moving xPos
  ];

  // check scope is clear
  const tilesMovingOver = movingScope(startTile, endTile, currentBoardState);
  const moveBlocked = isMoveBlocked(tilesMovingOver, colourToMove);
  // the number of tiles queen has moved
  const tilesMoved = numberOfTilesMoved(startTile, endTile);
  // loop through the possible moves for queen
  for (const move of queenMoves) {
    const xNegYPos = move.x === -1 && move.y === 1;
    const xPosYPos = move.x === 1 && move.y === 1;
    const xNegYNeg = move.x === -1 && move.y === -1;
    const xPosYNeg = move.x === 1 && move.y === -1;
    const yPos = move.x === 0 && move.y === 1;
    const yNeg = move.x === 0 && move.y === -1;
    const xPos = move.x === 1 && move.y === 0;
    const xNeg = move.x === -1 && move.y === 0;

    const xDestination = tilesMoved * move.x;
    const yDestination = tilesMoved * move.y;

    // if the move is not blocked
    if (!moveBlocked) {
      // for when the queen is moving xNegYPos
      if (xNegYPos) {
        // if endTile matches with destination tile
        if (
          startTile.row + yDestination === endTile.row &&
          columnRef.indexOf(startTile.column) + xDestination ===
            columnRef.indexOf(endTile.column)
        ) {
          return true;
        }
      }
      // for when the queen is moving xPosYPos
      if (xPosYPos) {
        // if endTile matches with destination tile
        if (
          startTile.row + yDestination === endTile.row &&
          columnRef.indexOf(startTile.column) + xDestination ===
            columnRef.indexOf(endTile.column)
        ) {
          return true;
        }
      }
      // for when the queen is moving xNegYNeg
      if (xNegYNeg) {
        // if endTile matches with destination tile
        if (
          startTile.row + yDestination === endTile.row &&
          columnRef.indexOf(startTile.column) + xDestination ===
            columnRef.indexOf(endTile.column)
        ) {
          return true;
        }
      }
      // for when the queen is moving xPosYNeg
      if (xPosYNeg) {
        // if endTile matches with destination tile
        if (
          startTile.row + yDestination === endTile.row &&
          columnRef.indexOf(startTile.column) + xDestination ===
            columnRef.indexOf(endTile.column)
        ) {
          return true;
        }
      }
      // for when the queen is moving yPos or yNeg
      if (yPos || yNeg) {
        // queen is on the same column
        if (sameColumn) {
          return true;
        }
      }
      // for when the queen is moving xPos or xNeg
      if (xPos || xNeg) {
        // queen is on the same row
        if (sameRow) {
          return true;
        }
      }
    }
  }
  return false;
};

module.exports = { queenMovement };

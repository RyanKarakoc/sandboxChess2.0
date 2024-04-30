const { columnRef } = require("../../columnRef");
const { isMoveBlocked } = require("../../movement/isMoveBlocked");
const { movingScope } = require("../../movement/movingScope");
const { numberOfTilesMoved } = require("../../movement/numberOfTilesMoved");

const bishopMovement = (
  startTile,
  endTile,
  currentBoardState,
  colourToMove
) => {
  const bishopMoves = [
    { x: -1, y: 1 }, // bishop is moving xNegYPos
    { x: 1, y: 1 }, // bishop is moving xPosYPos
    { x: -1, y: -1 }, // bishop is moving xNegYNeg
    { x: 1, y: -1 }, // bishop is moving xPosYNeg
  ];

  // check scope is clear
  const tilesMovingOver = movingScope(startTile, endTile, currentBoardState);
  const moveBlocked = isMoveBlocked(tilesMovingOver, colourToMove);
  // the number of tiles bishop has moved
  const tilesMoved = numberOfTilesMoved(startTile, endTile);

  // loop through the possible moves for bishop
  for (const move of bishopMoves) {
    const xNegYPos = move.x === -1 && move.y === 1;
    const xPosYPos = move.x === 1 && move.y === 1;
    const xNegYNeg = move.x === -1 && move.y === -1;
    const xPosYNeg = move.x === 1 && move.y === -1;

    const xDestination = tilesMoved * move.x;
    const yDestination = tilesMoved * move.y;

    // if the move is not blocked
    if (!moveBlocked) {
      // for when the bishop is moving xNegYPos
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
      // for when the bishop is moving xPosYPos
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
      // for when the bishop is moving xNegYNeg
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
      // for when the bishop is moving xPosYNeg
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
    }
  }
  return false;
};

module.exports = { bishopMovement };

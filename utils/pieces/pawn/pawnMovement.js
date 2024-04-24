const { columnRef } = require("../../columnRef");
const { isMoveBlocked } = require("../../movement/isMoveBlocked");
const { movingScope } = require("../../movement/movingScope");

const pawnMovement = (startTile, endTile, currentBoardState, colourToMove) => {
  const xTilesMoved =
    columnRef.indexOf(endTile.column) - columnRef.indexOf(startTile.column);
  const yTilesMoved = endTile.row - startTile.row;
  const startRow = colourToMove === "white" ? 2 : 7;

  const pawnMoves =
    colourToMove === "white"
      ? [
          { x: 0, y: 2 },
          { x: 0, y: 1 },
          { x: -1, y: 1 },
          { x: 1, y: 1 },
        ]
      : [
          { x: 0, y: -2 },
          { x: 0, y: -1 },
          { x: -1, y: -1 },
          { x: 1, y: -1 },
        ];

  // check scope is clear
  const tilesMovingOver = movingScope(startTile, endTile, currentBoardState);
  const moveBlocked = isMoveBlocked(tilesMovingOver, colourToMove);

  // loop through the possible moves for pawn
  for (const move of pawnMoves) {
    // if the move is not blocked
    if (!moveBlocked) {
      // check start and end tiles match with moving 2 tile from the start
      if (move.x === 0 && (move.y === 2 || move.y === -2)) {
        if (
          move.x === xTilesMoved &&
          move.y === yTilesMoved &&
          (startRow === 2 || startRow === 7)
        ) {
          return true;
        }
      }
      // check start and end tiles match with moving 1 tile
      if (move.x === 0 && (move.y === 1 || move.y === -1)) {
        if (move.x === xTilesMoved && move.y === yTilesMoved) {
          return true;
        }
      }
      // check start and end tiles match with capturing xNeg
      if (move.x === -1 && (move.y === 1 || move.y === -1)) {
        if (move.x === xTilesMoved && move.y === yTilesMoved) {
          return true;
        }
      }
      // check start and end tiles match with capturing xPos
      if (move.x === 1 && (move.y === 1 || move.y === -1)) {
        if (move.x === xTilesMoved && move.y === yTilesMoved) {
          return true;
        }
      }
    }
  }
  return false;
};

module.exports = { pawnMovement };
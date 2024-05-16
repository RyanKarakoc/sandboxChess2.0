const { columnRef } = require("../../columnRef");
const { isMoveBlocked } = require("../../movement/isMoveBlocked");
const { movingScope } = require("../../movement/movingScope");
const { whitePieces } = require("../whitePieces");
const { checkEnPassant } = require("./checkEnPassant");

const pawnMovement = (
  startTile,
  endTile,
  currentBoardState,
  colourToMove,
  previousMove
) => {
  const xTilesMoved =
    columnRef.indexOf(endTile.column) - columnRef.indexOf(startTile.column);
  const yTilesMoved = endTile.row - startTile.row;
  const startRow = colourToMove === "white" ? 2 : 7;

  const pawnMoves =
    colourToMove === "white"
      ? [
          { x: 0, y: 2 }, // white pawn moves 2 tiles from start
          { x: 0, y: 1 }, // white pawn moves 1 tile
          { x: -1, y: 1 }, // white pawn captures black pawn xNeg
          { x: 1, y: 1 }, // white pawn captures black pawn xPos
        ]
      : [
          { x: 0, y: -2 }, // black pawn moves 2 tiles from start
          { x: 0, y: -1 }, // black pawn moves 1 tile
          { x: -1, y: -1 }, // black pawn captures white pawn xNeg
          { x: 1, y: -1 }, // black pawn captures white pawn xPos
        ];

  // check scope is clear
  const tilesMovingOver = movingScope(startTile, endTile, currentBoardState);
  const moveBlocked = isMoveBlocked(tilesMovingOver, colourToMove);

  // variable for when moving forward pawns can be blocked
  const blockedFromMovingForward =
    tilesMovingOver[tilesMovingOver.length - 1].piece !== "";

  // variable for checking if enPassant can occur
  const enPassant = checkEnPassant(
    startTile,
    currentBoardState,
    colourToMove,
    previousMove
  );

  // loop through the possible moves for pawn
  for (const move of pawnMoves) {
    const yPosTwo =
      (move.x === 0 && move.y === 2) || (move.x === 0 && move.y === -2);
    const yPos =
      (move.x === 0 && move.y === 1) || (move.x === 0 && move.y === -1);
    const xNegYPos = move.x === -1 && move.y === 1;
    const xNegYNeg = move.x === -1 && move.y === -1;
    const xPosYPos = move.x === 1 && move.y === 1;
    const xPosYNeg = move.x === 1 && move.y === -1;

    // if the move is not blocked
    if (!moveBlocked) {
      // check start and end tiles match with moving 2 tile from the start
      if (yPosTwo) {
        // check if moves match and nothing is blocking forward movement
        if (
          move.x === xTilesMoved &&
          move.y === yTilesMoved &&
          (startRow === 2 || startRow === 7) &&
          !blockedFromMovingForward
        ) {
          return true;
        }
      }
      // check start and end tiles match with moving 1 tile
      if (yPos) {
        // check if moves match and nothing is blocking forward movement
        if (
          move.x === xTilesMoved &&
          move.y === yTilesMoved &&
          !blockedFromMovingForward
        ) {
          return true;
        }
      }
      // check start and end tiles match with capturing xNeg
      if (xNegYPos || xNegYNeg) {
        if (enPassant) {
          return true;
        }
        if (
          move.x === xTilesMoved &&
          move.y === yTilesMoved &&
          blockedFromMovingForward
        ) {
          return true;
        }
      }
      // check start and end tiles match with capturing xPos
      if (xPosYPos || xPosYNeg) {
        if (enPassant) {
          return true;
        }
        if (
          move.x === xTilesMoved &&
          move.y === yTilesMoved &&
          blockedFromMovingForward
        ) {
          return true;
        }
      }
    }
  }
  return false;
};

module.exports = { pawnMovement };

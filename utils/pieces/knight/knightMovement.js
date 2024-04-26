const { boardOffset } = require("../../boardOffset");
const { columnRef } = require("../../columnRef");
const { blackPieces } = require("../blackPieces");
const { whitePieces } = require("../whitePieces");

const knightMovement = (
  startTile,
  endTile,
  currentBoardState,
  colourToMove
) => {
  const knightMoves = [
    { x: 1, y: 2 }, // knight is moving forward 2 and xPos
    { x: -1, y: 2 }, // knight is moving forward 2 and xNeg
    { x: 1, y: -2 }, // knight is moving backward 2 and xPos
    { x: -1, y: -2 }, // knight is moving backward 2 and xNeg
    { x: -2, y: 1 }, // knight is moving left 2 and yPos
    { x: -2, y: -1 }, // knight is moving left 2 and yNeg
    { x: 2, y: 1 }, // knight is moving right 2 and yPos
    { x: 2, y: -1 }, // knight is moving right 2 and yNeg
  ];

  // loop through the possible moves for knight
  for (const move of knightMoves) {
    const yDestination = startTile.row + move.y - boardOffset;
    const finalYPosition = endTile.row - boardOffset;
    const xDestination = columnRef.indexOf(startTile.column) + move.x;
    const finalXPosition = columnRef.indexOf(endTile.column);
    // make sure final positions are within board
    if (
      (finalYPosition >= 0 || finalYPosition <= 7) &&
      (finalXPosition >= 0 || finalXPosition <= 7)
    ) {
      // set up variablew for the landing tile
      const finalTile = currentBoardState[finalYPosition][finalXPosition];
      // predicted position is equal to the actual final position
      if (yDestination === finalYPosition && xDestination === finalXPosition) {
        // if the colour to move is white
        if (colourToMove === "white") {
          // if final tile has no piece
          if (finalTile.piece === "") {
            return true;
          }
          // if the final tile has a black piece (captures opponents piece)
          for (const piece in blackPieces) {
            if (finalTile.piece === blackPieces[piece]) {
              return true;
            }
          }
        }
        if (colourToMove === "black") {
          if (finalTile.piece === "") {
            return true;
          }
          for (const piece in whitePieces) {
            if (finalTile.piece === whitePieces[piece]) {
              return true;
            }
          }
        }
      }
    }
  }
  return false;
};

module.exports = { knightMovement };

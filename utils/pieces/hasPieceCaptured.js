const { boardOffset } = require("../boardOffset");
const { columnRef } = require("../columnRef");
const { blackPieces } = require("./blackPieces");
const { whitePieces } = require("./whitePieces");

const hasPieceCaptured = (endTile, currentBoardState, colourToMove) => {
  // Calculating the row index in the board state array
  const boardStateRow = endTile.row - boardOffset;

  // Finding the column index in the board state array using column reference
  const boardStateColumn = columnRef.indexOf(endTile.column);

  // Selecting the appropriate pieces array based on the current color to move
  const pieces = colourToMove === "white" ? blackPieces : whitePieces;

  // Loop through the pieces array to check if any piece matches the one at the specified position
  for (const piece in pieces) {
    // If the piece at the specified position matches, return true (piece has been captured)
    if (
      currentBoardState[boardStateRow][boardStateColumn].piece === pieces[piece]
    ) {
      return true;
    }
  }
  // If no piece is found matching the specified criteria, return false (no piece captured)
  return false;
};

module.exports = { hasPieceCaptured };

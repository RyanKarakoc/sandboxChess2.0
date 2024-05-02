const { boardOffset } = require("../boardOffset");
const { columnRef } = require("../columnRef");
const { blackPieces } = require("./blackPieces");
const { whitePieces } = require("./whitePieces");

const hasPieceCaptured = (endTile, currentBoardState, colourToMove) => {
  const boardStateRow = endTile.row - boardOffset;
  const boardStateColumn = columnRef.indexOf(endTile.column);

  const pieces = colourToMove === "white" ? blackPieces : whitePieces;

  for (const piece in pieces) {
    if (
      currentBoardState[boardStateRow][boardStateColumn].piece === pieces[piece]
    ) {
      return true;
    }
  }
  return false;
};

module.exports = { hasPieceCaptured };

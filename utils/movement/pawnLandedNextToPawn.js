const { boardOffset } = require("../boardOffset");
const { columnRef } = require("../columnRef");
const { blackPieces } = require("../pieces/blackPieces");
const { whitePieces } = require("../pieces/whitePieces");

const pawnNextToPawn = (startTile, currentBoardState, colourToMove) => {
  const boardStateStartColumn = columnRef.indexOf(startTile.column);
  const boardStateStartRow = startTile.row - boardOffset;

  const xNeg = boardStateStartColumn > 0 ? -1 : 0;
  const xPos = boardStateStartColumn < 7 ? 1 : 0;

  const attackedPawn =
    colourToMove === "white" ? blackPieces.pawn : whitePieces.pawn;

  // if position xNeg of pawn is the movedPawn
  if (
    currentBoardState[boardStateStartRow][boardStateStartColumn + xNeg]
      .piece === attackedPawn
  ) {
    return true;
  }

  // if position xPos of pawn is the movedPawn
  if (
    currentBoardState[boardStateStartRow][boardStateStartColumn + xPos]
      .piece === attackedPawn
  ) {
    return true;
  }
  return false;
};

module.exports = { pawnNextToPawn };

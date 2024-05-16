const { boardOffset } = require("../boardOffset");
const { columnRef } = require("../columnRef");
const { checkEnPassant } = require("../pieces/pawn/checkEnPassant");

const boardUpdate = (
  startTile,
  endTile,
  currentBoardState,
  movingPiece,
  colourToMove,
  previousMove
) => {
  const newBoard = [...currentBoardState];

  const boardColumnStart = columnRef.indexOf(startTile.column);
  const boardRowStart = startTile.row - boardOffset;

  const boardColumnEnd = columnRef.indexOf(endTile.column);
  const boardRowEnd = endTile.row - boardOffset;

  // enPassant boardUpdate
  if (
    checkEnPassant(startTile, currentBoardState, colourToMove, previousMove)
  ) {
    // start position
    newBoard[boardRowStart][boardColumnStart].piece = "";
    // captured pawn
    newBoard[boardRowStart][boardColumnEnd].piece = "";
    // end position
    newBoard[boardRowEnd][boardColumnEnd].piece = movingPiece;
  }

  // normal boardUpdate

  // start position
  newBoard[boardRowStart][boardColumnStart].piece = "";
  // end position
  newBoard[boardRowEnd][boardColumnEnd].piece = movingPiece;

  return newBoard;
};

module.exports = { boardUpdate };

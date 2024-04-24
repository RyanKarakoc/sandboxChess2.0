const { columnRef } = require("../columnRef");

const boardUpdate = (startTile, endTile, currentBoardState, movingPiece) => {
  const newBoard = [...currentBoardState];

  const boardOffset = 1;

  const boardColumnStart = columnRef.indexOf(startTile.column);
  const boardRowStart = startTile.row - boardOffset;

  const boardColumnEnd = columnRef.indexOf(endTile.column);
  const boardRowEnd = endTile.row - boardOffset;

  // normal boardUpdate
  newBoard[boardRowStart][boardColumnStart].piece = "";
  newBoard[boardRowEnd][boardColumnEnd].piece = movingPiece;

  console.log(newBoard);
  return newBoard;
};

module.exports = { boardUpdate };

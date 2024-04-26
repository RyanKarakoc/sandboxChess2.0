const { boardOffset } = require("../boardOffset");
const { columnRef } = require("../columnRef");

const numberOfTilesMoved = (startTile, endTile) => {
  const boardColumnStart = columnRef.indexOf(startTile.column);
  const boardColumnEnd = columnRef.indexOf(endTile.column);
  const boardRowStart = startTile.row - boardOffset;
  const boardRowEnd = endTile.row - boardOffset;

  let columnDifference = 0;
  let rowDifference = 0;

  // when moving horizontally
  if (endTile.row === startTile.row) {
    if (boardColumnEnd > boardColumnStart) {
      columnDifference = boardColumnEnd - boardColumnStart;
    }
    if (boardColumnEnd < boardColumnStart) {
      columnDifference = boardColumnStart - boardColumnEnd;
    }
  }

  //   when moving vertically
  if (endTile.column === startTile.column) {
    if (boardRowEnd > boardRowStart) {
      rowDifference = boardRowEnd - boardRowStart;
    }
    if (boardRowEnd < boardRowStart) {
      rowDifference = boardRowStart - boardRowEnd;
    }
  }

  // when moving diagonally
  if (endTile.row !== startTile.row && endTile.column !== startTile.column) {
    if (boardRowEnd > boardRowStart) {
      rowDifference = boardRowEnd - boardRowStart;
    }
    if (boardRowEnd < boardRowStart) {
      rowDifference = boardRowStart - boardRowEnd;
    }
  }

  return rowDifference + columnDifference;
};

module.exports = { numberOfTilesMoved };

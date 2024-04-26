const { boardOffset } = require("../boardOffset");
const { columnRef } = require("../columnRef");

const directionMoved = (startTile, endTile) => {
  const boardColumnStart = columnRef.indexOf(startTile.column);
  const boardColumnEnd = columnRef.indexOf(endTile.column);
  const boardRowStart = startTile.row - boardOffset;
  const boardRowEnd = endTile.row - boardOffset;

  // when moving horizontally
  if (endTile.row === startTile.row) {
    if (boardColumnEnd > boardColumnStart) {
      return "xPos";
    }
    if (boardColumnEnd < boardColumnStart) {
      return "xNeg";
    }
  }

  //   when moving vertically
  if (endTile.column === startTile.column) {
    if (boardRowEnd > boardRowStart) {
      return "yPos";
    }
    if (boardRowEnd < boardRowStart) {
      return "yNeg";
    }
  }

  // when moving diagonally
  if (endTile.row !== startTile.row && endTile.column !== startTile.column) {
    if (boardRowEnd > boardRowStart && boardColumnEnd > boardColumnStart) {
      return "xPosYPos";
    }
    if (boardRowEnd > boardRowStart && boardColumnEnd < boardColumnStart) {
      return "xNegYPos";
    }
    if (boardRowEnd < boardRowStart && boardColumnEnd > boardColumnStart) {
      return "xPosYNeg";
    }
    if (boardRowEnd < boardRowStart && boardColumnEnd < boardColumnStart) {
      return "xNegYNeg";
    }
  }
};

module.exports = { directionMoved };

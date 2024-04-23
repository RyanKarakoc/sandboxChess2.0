const { columnRef } = require("../columnRef");
const { directionMoved } = require("./directionMoved");
const { numberOfTilesMoved } = require("./numberOfTilesMoved");

const movingScope = (startTile, endTile, currentBoardState) => {
  const boardOffset = 1;
  const boardColumnStart = columnRef.indexOf(startTile.column);
  const boardRowStart = startTile.row - boardOffset;

  const tilesMoved = numberOfTilesMoved(startTile, endTile);
  const direction = directionMoved(startTile, endTile);

  const moveScope = [];

  for (let i = 0; i <= tilesMoved; i++) {
    if (direction === "yPos") {
      moveScope.push(currentBoardState[boardRowStart + i][boardColumnStart]);
    }
    if (direction === "yNeg") {
      moveScope.push(currentBoardState[boardRowStart - i][boardColumnStart]);
    }
    if (direction === "xPos") {
      moveScope.push(currentBoardState[boardRowStart][boardColumnStart + i]);
    }
    if (direction === "xNeg") {
      moveScope.push(currentBoardState[boardRowStart][boardColumnStart - i]);
    }
    if (direction === "xNegYPos") {
      moveScope.push(
        currentBoardState[boardRowStart + i][boardColumnStart - i]
      );
    }
    if (direction === "xNegYNeg") {
      moveScope.push(
        currentBoardState[boardRowStart - i][boardColumnStart - i]
      );
    }
    if (direction === "xPosYPos") {
      moveScope.push(
        currentBoardState[boardRowStart + i][boardColumnStart + i]
      );
    }
    if (direction === "xPosYNeg") {
      moveScope.push(
        currentBoardState[boardRowStart - i][boardColumnStart + i]
      );
    }
  }

  // removes original starting tile from scope
  moveScope.shift();

  return moveScope;
};

module.exports = { movingScope };

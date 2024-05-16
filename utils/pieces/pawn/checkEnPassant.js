const { pawnNextToPawn } = require("../../movement/pawnLandedNextToPawn");
const { pawnMovedTwoTiles } = require("../../movement/pawnMovedTwoTiles");

const checkEnPassant = (
  startTile,
  currentBoardState,
  colourToMove,
  previousMove
) => {
  // return false when first move of the game or castling
  if (
    previousMove === undefined ||
    previousMove === null ||
    previousMove[0] === "O-O" ||
    previousMove[0] === "O-O-O"
  ) {
    return false;
  }

  const pawnTwoTiles = pawnMovedTwoTiles(previousMove);
  const hasPawnLandedNextToPawn = pawnNextToPawn(
    startTile,
    currentBoardState,
    colourToMove
  );

  if (pawnTwoTiles && hasPawnLandedNextToPawn) {
    return true;
  }

  return false;
};

module.exports = { checkEnPassant };

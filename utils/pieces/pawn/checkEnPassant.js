const { pawnNextToPawn } = require("../../movement/pawnLandedNextToPawn");
const { pawnMovedTwoTiles } = require("../../movement/pawnMovedTwoTiles");
const { blackPieces } = require("../blackPieces");
const { whitePieces } = require("../whitePieces");

const checkEnPassant = (
  startTile,
  currentBoardState,
  colourToMove,
  previousMove
) => {
  console.log(previousMove);
  // return false when first move of the game or castling
  if (
    previousMove === undefined ||
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
    console.log("hello");
    return true;
  }

  return false;
};

module.exports = { checkEnPassant };

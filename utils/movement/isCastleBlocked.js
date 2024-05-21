const { blackPieces } = require("../pieces/blackPieces");
const { whitePieces } = require("../pieces/whitePieces");

const isCastleBlocked = (directionMoved, currentBoardState, colourToMove) => {
  // Define direction constants for castling
  const xNeg = "xNeg";
  const xPos = "xPos";

  // Determine if the queenside castling path is empty
  const queenSideEmpty =
    colourToMove === "white"
      ? currentBoardState[0][2].piece === "" &&
        currentBoardState[0][3].piece === ""
        ? true
        : false
      : currentBoardState[7][2].piece === "" &&
        currentBoardState[7][3].piece === ""
      ? true
      : false;

  // Determine if the kingside castling path is empty
  const kingSideEmpty =
    colourToMove === "white"
      ? currentBoardState[0][6].piece === "" &&
        currentBoardState[0][5].piece === ""
        ? true
        : false
      : currentBoardState[7][6].piece === "" &&
        currentBoardState[7][5].piece === ""
      ? true
      : false;

  // Check if the castling move is to the queenside
  if (directionMoved === xNeg) {
    // if queenside path is not empty return true
    if (!queenSideEmpty) {
      return true;
    }
  }
  // Check if the castling move is to the kingside
  if (directionMoved === xPos) {
    // if kinside path is not empty return true
    if (!kingSideEmpty) {
      return true;
    }
  }
  // path is not blocked
  return false;
};

module.exports = { isCastleBlocked };

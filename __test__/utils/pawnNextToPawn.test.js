const initialBoard = require("../../utils/board/initialBoard");
const { pawnNextToPawn } = require("../../utils/movement/pawnLandedNextToPawn");
const { blackPieces } = require("../../utils/pieces/blackPieces");
const { whitePieces } = require("../../utils/pieces/whitePieces");

describe("pawnMovedTwoTiles", () => {
  describe("white pawn", () => {
    test("should return true when pawn moves two tiles from start and lands next to opponent pawn x Neg", () => {
      // arrange
      const startTile = { piece: whitePieces.pawn, column: "e", row: 5 };
      const currentBoardState = [...initialBoard];
      currentBoardState[1][4].piece = "";
      currentBoardState[4][4].piece = whitePieces.pawn;
      currentBoardState[6][3].piece = "";
      currentBoardState[4][3].piece = blackPieces.pawn;
      const colourToMove = "white";
      // act
      const result = pawnNextToPawn(startTile, currentBoardState, colourToMove);
      // assert
      expect(result).toBe(true);
    });
    test("should return true when pawn moves two tiles from start and lands next to opponent pawn x Pos", () => {
      // arrange
      const startTile = { piece: whitePieces.pawn, column: "e", row: 5 };
      const currentBoardState = [...initialBoard];
      currentBoardState[1][4].piece = "";
      currentBoardState[4][4].piece = whitePieces.pawn;
      currentBoardState[6][5].piece = "";
      currentBoardState[4][5].piece = blackPieces.pawn;
      const colourToMove = "white";
      // act
      const result = pawnNextToPawn(startTile, currentBoardState, colourToMove);
      // assert
      expect(result).toBe(true);
    });
  });
});

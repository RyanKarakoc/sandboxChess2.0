const initialBoard = require("../../utils/board/initialBoard");
const { blackPieces } = require("../../utils/pieces/blackPieces");
const { hasPieceCaptured } = require("../../utils/pieces/captured");
const { whitePieces } = require("../../utils/pieces/whitePieces");

describe("hasPieceCaptured", () => {
  test("should return a boolean", () => {
    // arrange
    const endTile = { piece: whitePieces.pawn, row: 5, column: "d" };
    const currentBoardState = [...initialBoard];
    currentBoardState[0][4].piece = "";
    currentBoardState[6][3].piece = "";
    currentBoardState[4][3].piece = blackPieces.pawn;
    const colourToMove = "white";
    // act
    const result = hasPieceCaptured(endTile, currentBoardState, colourToMove);
    // assert
    expect(typeof result).toBe("boolean");
  });
  test("should return true when capturing a piece", () => {
    // arrange
    const endTile = { piece: whitePieces.pawn, row: 5, column: "d" };
    const currentBoardState = [...initialBoard];
    currentBoardState[0][4].piece = "";
    currentBoardState[6][3].piece = "";
    currentBoardState[4][3].piece = blackPieces.pawn;
    const colourToMove = "white";
    // act
    const result = hasPieceCaptured(endTile, currentBoardState, colourToMove);
    // assert
    expect(result).toBe(true);
  });
  test("should return false when not capturing a piece", () => {
    // arrange
    const endTile = { piece: whitePieces.pawn, row: 4, column: "e" };
    const currentBoardState = [...initialBoard];
    const colourToMove = "white";
    // act
    const result = hasPieceCaptured(endTile, currentBoardState, colourToMove);
    // assert
    expect(result).toBe(false);
  });
});

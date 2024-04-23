const initialBoard = require("../../utils/board/initialBoard");
const { whitePieces } = require("../../utils/pieces/whitePieces");
const { blackPieces } = require("../../utils/pieces/blackPieces");
const { movingScope } = require("../../utils/movement/movingScope");

describe("movingScope", () => {
  test("should return an array", () => {
    // arrange
    const startTile = { piece: whitePieces.pawn, row: 2, column: "h" };
    const endTile = { piece: whitePieces.pawn, row: 4, column: "h" };
    const currentBoardState = [...initialBoard];
    // act
    const result = movingScope(startTile, endTile, currentBoardState);
    // assert
    expect(Array.isArray(result)).toBe(true);
  });
  test("should return an array containing all tiles moved", () => {
    // arrange
    const startTile = { piece: whitePieces.pawn, row: 2, column: "h" };
    const endTile = { piece: whitePieces.pawn, row: 8, column: "h" };
    const currentBoardState = [...initialBoard];
    const value = [
      { piece: "", row: 3, column: "h" },
      { piece: "", row: 4, column: "h" },
      { piece: "", row: 5, column: "h" },
      { piece: "", row: 6, column: "h" },
      { piece: blackPieces.pawn, row: 7, column: "h" },
      { piece: blackPieces.rook, row: 8, column: "h" },
    ];
    // act
    const result = movingScope(startTile, endTile, currentBoardState);
    // assert
    expect(result).toEqual(value);
  });
});

const { whitePieces } = require("../../utils/pieces/whitePieces");
const { blackPieces } = require("../../utils/pieces/blackPieces");
const { isMoveBlocked } = require("../../utils/movement/isMoveBlocked");

describe("isMoveBlocked", () => {
  test("should return a boolean", () => {
    // arrange
    const movingScope = [];
    const colourToMove = "white";
    // act
    const result = isMoveBlocked(movingScope, colourToMove);
    //assert
    expect(typeof result).toBe("boolean");
  });
  test("should return true when a piece is blocking final position", () => {
    // arrange
    const movingScope = [
      { piece: whitePieces.pawn, row: 2, column: "h" },
      { piece: "", row: 3, column: "h" },
      { piece: "", row: 4, column: "h" },
      { piece: "", row: 5, column: "h" },
      { piece: "", row: 6, column: "h" },
      { piece: blackPieces.pawn, row: 7, column: "h" },
      { piece: blackPieces.queen, row: 8, column: "h" },
    ];
    const colourToMove = "white";
    // act
    const result = isMoveBlocked(movingScope, colourToMove);
    //assert
    expect(result).toBe(true);
  });
  test("should return false when nothing is blocking final position", () => {
    // arrange
    const movingScope = [
      { piece: "", row: 3, column: "h" },
      { piece: "", row: 4, column: "h" },
    ];
    const colourToMove = "white";
    // act
    const result = isMoveBlocked(movingScope, colourToMove);
    //assert
    expect(result).toBe(false);
  });
});

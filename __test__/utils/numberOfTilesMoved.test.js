const {
  numberOfTilesMoved,
} = require("../../utils/movement/numberOfTilesMoved");
const { whitePieces } = require("../../utils/pieces/whitePieces");

describe("numberOfTilesMoved", () => {
  test("should return a number", () => {
    // arange
    const startTile = { piece: whitePieces.pawn, row: 2, column: "h" };
    const endTile = { piece: whitePieces.pawn, row: 4, column: "h" };
    // act
    const result = numberOfTilesMoved(startTile, endTile);
    // assert
    expect(typeof result).toBe("number");
  });
  test("should return correct number when moving vertically", () => {
    // arange
    const startTile = { piece: whitePieces.pawn, row: 2, column: "h" };
    const endTile = { piece: whitePieces.pawn, row: 4, column: "h" };
    // act
    const result = numberOfTilesMoved(startTile, endTile);
    // assert
    expect(result).toBe(2);
  });
  test("should return correct number when moving horizontaly", () => {
    // arange
    const startTile = { piece: whitePieces.queen, row: 1, column: "a" };
    const endTile = { piece: whitePieces.queen, row: 1, column: "h" };
    // act
    const result = numberOfTilesMoved(startTile, endTile);
    // assert
    expect(result).toBe(7);
  });
  test("should return correct number when moving diagonally", () => {
    // arange
    const startTile = { piece: whitePieces.queen, row: 1, column: "a" };
    const endTile = { piece: whitePieces.queen, row: 5, column: "e" };
    // act
    const result = numberOfTilesMoved(startTile, endTile);
    // assert
    expect(result).toBe(4);
  });
});

const { directionMoved } = require("../../utils/movement/directionMoved");
const { blackPieces } = require("../../utils/pieces/blackPieces");
const { whitePieces } = require("../../utils/pieces/whitePieces");

describe("directionMoved", () => {
  test("should return a string", () => {
    // arrange
    const startTile = { piece: whitePieces.queen, row: 1, column: "d" };
    const endTile = { piece: whitePieces.queen, row: 5, column: "d" };
    // act
    const result = directionMoved(startTile, endTile);
    // assert
    expect(typeof result).toBe("string");
  });
  test("should return xNeg when moving horizontally (left)", () => {
    // arrange
    const startTile = { piece: whitePieces.queen, row: 1, column: "d" };
    const endTile = { piece: whitePieces.queen, row: 1, column: "a" };
    const value = "xNeg";
    // act
    const result = directionMoved(startTile, endTile);
    // assert
    expect(result).toBe(value);
  });
  test("should return xPos when moving horizontally (right)", () => {
    // arrange
    const startTile = { piece: whitePieces.queen, row: 1, column: "d" };
    const endTile = { piece: whitePieces.queen, row: 1, column: "h" };
    const value = "xPos";
    // act
    const result = directionMoved(startTile, endTile);
    // assert
    expect(result).toBe(value);
  });
  test("should return yPos when moving vertically (up)", () => {
    // arrange
    const startTile = { piece: whitePieces.queen, row: 1, column: "d" };
    const endTile = { piece: whitePieces.queen, row: 4, column: "d" };
    const value = "yPos";
    // act
    const result = directionMoved(startTile, endTile);
    // assert
    expect(result).toBe(value);
  });
  test("should return yNeg when moving vertically (down)", () => {
    // arrange
    const startTile = { piece: blackPieces.queen, row: 8, column: "d" };
    const endTile = { piece: blackPieces.queen, row: 5, column: "d" };
    const value = "yNeg";
    // act
    const result = directionMoved(startTile, endTile);
    // assert
    expect(result).toBe(value);
  });
  test("should return xPosYPos when moving horizontally and vertically (right)(up)", () => {
    // arrange
    const startTile = { piece: whitePieces.queen, row: 1, column: "d" };
    const endTile = { piece: whitePieces.queen, row: 5, column: "h" };
    const value = "xPosYPos";
    // act
    const result = directionMoved(startTile, endTile);
    // assert
    expect(result).toBe(value);
  });
  test("should return xNegYPos when moving horizontally and vertically (left)(up)", () => {
    // arrange
    const startTile = { piece: whitePieces.queen, row: 1, column: "d" };
    const endTile = { piece: whitePieces.queen, row: 5, column: "a" };
    const value = "xNegYPos";
    // act
    const result = directionMoved(startTile, endTile);
    // assert
    expect(result).toBe(value);
  });
  test("should return xPosYNeg when moving horizontally and vertically (right)(down)", () => {
    // arrange
    const startTile = { piece: blackPieces.queen, row: 8, column: "d" };
    const endTile = { piece: blackPieces.queen, row: 5, column: "h" };
    const value = "xPosYNeg";
    // act
    const result = directionMoved(startTile, endTile);
    // assert
    expect(result).toBe(value);
  });
  test("should return xNegYNeg when moving horizontally and vertically (left)(down)", () => {
    // arrange
    const startTile = { piece: blackPieces.queen, row: 8, column: "d" };
    const endTile = { piece: blackPieces.queen, row: 5, column: "a" };
    const value = "xNegYNeg";
    // act
    const result = directionMoved(startTile, endTile);
    // assert
    expect(result).toBe(value);
  });
});

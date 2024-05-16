const { pawnMovedTwoTiles } = require("../../utils/movement/pawnMovedTwoTiles");
const { blackPieces } = require("../../utils/pieces/blackPieces");
const { whitePieces } = require("../../utils/pieces/whitePieces");

describe("pawnMovedTwoTiles", () => {
  describe("white pawn", () => {
    test("should return true when pawn moves two tiles from start", () => {
      // arrange
      const previousMove = [1, whitePieces.pawn, ["e", 2], ["e", 4]];
      // act
      const result = pawnMovedTwoTiles(previousMove);
      // assert
      expect(result).toBe(true);
    });
    test("should return false when pawn moves 1 tiles from start", () => {
      // arrange
      const previousMove = [1, whitePieces.pawn, ["e", 2], ["e", 3]];
      // act
      const result = pawnMovedTwoTiles(previousMove);
      // assert
      expect(result).toBe(false);
    });
    test("should return false when piece moved is not a pawn", () => {
      // arrange
      const previousMove = [1, whitePieces.knight, ["g", 1], ["f", 3]];
      // act
      const result = pawnMovedTwoTiles(previousMove);
      // assert
      expect(result).toBe(false);
    });
  });
  describe("white pawn", () => {
    test("should return true when pawn moves two tiles from start", () => {
      // arrange
      const previousMove = [1, blackPieces.pawn, ["e", 7], ["e", 5]];
      // act
      const result = pawnMovedTwoTiles(previousMove);
      // assert
      expect(result).toBe(true);
    });
    test("should return false when pawn moves 1 tiles from start", () => {
      // arrange
      const previousMove = [1, blackPieces.pawn, ["e", 7], ["e", 6]];
      // act
      const result = pawnMovedTwoTiles(previousMove);
      // assert
      expect(result).toBe(false);
    });
    test("should return false when piece moved is not a pawn", () => {
      // arrange
      const previousMove = [1, blackPieces.knight, ["g", 8], ["f", 6]];
      // act
      const result = pawnMovedTwoTiles(previousMove);
      // assert
      expect(result).toBe(false);
    });
  });
});

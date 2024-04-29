const initialBoard = require("../../utils/board/initialBoard");
const { blackPieces } = require("../../utils/pieces/blackPieces");
const { whitePieces } = require("../../utils/pieces/whitePieces");
const { bishopMovement } = require("../../utils/pieces/bishop/bishopMovement");

describe("bishopMovement", () => {
  describe("white bishop", () => {
    test("should return true when moving xNegYPos", () => {
      // arrange
      const startTile = { piece: whitePieces.bishop, row: 1, column: "f" };
      const endTile = { piece: whitePieces.bishop, row: 6, column: "a" };
      const currentBoardState = [...initialBoard];
      currentBoardState[1][4] = "";
      const colourToMove = "white";
      // act
      const result = bishopMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("should return true when moving xPosYPos", () => {
      // arrange
      const startTile = { piece: whitePieces.bishop, row: 1, column: "c" };
      const endTile = { piece: whitePieces.bishop, row: 6, column: "h" };
      const currentBoardState = [...initialBoard];
      currentBoardState[1][3] = "";
      const colourToMove = "white";
      // act
      const result = bishopMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("should return true when moving xNegYNeg", () => {
      // arrange
      const startTile = { piece: whitePieces.bishop, row: 8, column: "f" };
      const endTile = { piece: whitePieces.bishop, row: 3, column: "a" };
      const currentBoardState = [...initialBoard];
      currentBoardState[6][4] = "";
      const colourToMove = "white";
      // act
      const result = bishopMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("should return true when moving xNegYNeg", () => {
      // arrange
      const startTile = { piece: whitePieces.bishop, row: 8, column: "c" };
      const endTile = { piece: whitePieces.bishop, row: 3, column: "h" };
      const currentBoardState = [...initialBoard];
      currentBoardState[6][3] = "";
      const colourToMove = "white";
      // act
      const result = bishopMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("should return false when not moving diagonal", () => {
      // arrange
      const startTile = { piece: whitePieces.bishop, row: 1, column: "c" };
      const endTile = { piece: whitePieces.bishop, row: 5, column: "c" };
      const currentBoardState = [...initialBoard];
      currentBoardState[1][2] = "";
      const colourToMove = "white";
      // act
      const result = bishopMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(false);
    });
  });
  describe("black bishop", () => {
    test("should return true when moving xNegYPos", () => {
      // arrange
      const startTile = { piece: blackPieces.bishop, row: 1, column: "f" };
      const endTile = { piece: blackPieces.bishop, row: 6, column: "a" };
      const currentBoardState = [...initialBoard];
      currentBoardState[1][4] = "";
      const colourToMove = "white";
      // act
      const result = bishopMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("should return true when moving xPosYPos", () => {
      // arrange
      const startTile = { piece: blackPieces.bishop, row: 1, column: "c" };
      const endTile = { piece: blackPieces.bishop, row: 6, column: "h" };
      const currentBoardState = [...initialBoard];
      currentBoardState[1][3] = "";
      const colourToMove = "white";
      // act
      const result = bishopMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("should return true when moving xNegYNeg", () => {
      // arrange
      const startTile = { piece: blackPieces.bishop, row: 8, column: "f" };
      const endTile = { piece: blackPieces.bishop, row: 3, column: "a" };
      const currentBoardState = [...initialBoard];
      currentBoardState[6][4] = "";
      const colourToMove = "white";
      // act
      const result = bishopMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("should return true when moving xNegYNeg", () => {
      // arrange
      const startTile = { piece: blackPieces.bishop, row: 8, column: "c" };
      const endTile = { piece: blackPieces.bishop, row: 3, column: "h" };
      const currentBoardState = [...initialBoard];
      currentBoardState[6][3] = "";
      const colourToMove = "white";
      // act
      const result = bishopMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("should return false when not moving diagonal", () => {
      // arrange
      const startTile = { piece: blackPieces.bishop, row: 1, column: "c" };
      const endTile = { piece: blackPieces.bishop, row: 5, column: "c" };
      const currentBoardState = [...initialBoard];
      currentBoardState[1][2] = "";
      const colourToMove = "white";
      // act
      const result = bishopMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(false);
    });
  });
});

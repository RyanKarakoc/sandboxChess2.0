const initialBoard = require("../../utils/board/initialBoard");
const { blackPieces } = require("../../utils/pieces/blackPieces");
const { queenMovement } = require("../../utils/pieces/queen/queenMovement");
const { whitePieces } = require("../../utils/pieces/whitePieces");

describe("queenMovement", () => {
  describe("white queen", () => {
    test("should return true when moving xNegYPos", () => {
      // arrange
      const startTile = { piece: whitePieces.queen, row: 1, column: "f" };
      const endTile = { piece: whitePieces.queen, row: 6, column: "a" };
      const currentBoardState = [...initialBoard];
      currentBoardState[1][4] = "";
      const colourToMove = "white";
      // act
      const result = queenMovement(
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
      const startTile = { piece: whitePieces.queen, row: 1, column: "c" };
      const endTile = { piece: whitePieces.queen, row: 6, column: "h" };
      const currentBoardState = [...initialBoard];
      currentBoardState[1][3] = "";
      const colourToMove = "white";
      // act
      const result = queenMovement(
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
      const startTile = { piece: whitePieces.queen, row: 8, column: "f" };
      const endTile = { piece: whitePieces.queen, row: 3, column: "a" };
      const currentBoardState = [...initialBoard];
      currentBoardState[6][4] = "";
      const colourToMove = "white";
      // act
      const result = queenMovement(
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
      const startTile = { piece: whitePieces.queen, row: 8, column: "c" };
      const endTile = { piece: whitePieces.queen, row: 3, column: "h" };
      const currentBoardState = [...initialBoard];
      currentBoardState[6][3] = "";
      const colourToMove = "white";
      // act
      const result = queenMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("returns true when queen moves yPos", () => {
      // arrange
      const startTile = { piece: whitePieces.queen, row: 1, column: "h" };
      const endTile = { piece: whitePieces.queen, row: 6, column: "h" };
      const currentBoardState = [...initialBoard];
      currentBoardState[1][7].piece = "";
      const colourToMove = "white";
      // act
      const result = queenMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("returns true when queen moves yNeg", () => {
      // arrange
      const startTile = { piece: whitePieces.queen, row: 6, column: "h" };
      const endTile = { piece: whitePieces.queen, row: 1, column: "h" };
      const currentBoardState = [...initialBoard];
      currentBoardState[1][7].piece = "";
      currentBoardState[0][7].piece = "";
      const colourToMove = "white";
      // act
      const result = queenMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("returns true when queen moves xPos", () => {
      // arrange
      const startTile = { piece: whitePieces.queen, row: 3, column: "a" };
      const endTile = { piece: whitePieces.queen, row: 3, column: "h" };
      const currentBoardState = [...initialBoard];
      const colourToMove = "white";
      // act
      const result = queenMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("returns true when queen moves xNeg", () => {
      // arrange
      const startTile = { piece: whitePieces.queen, row: 3, column: "h" };
      const endTile = { piece: whitePieces.queen, row: 3, column: "a" };
      const currentBoardState = [...initialBoard];
      const colourToMove = "white";
      // act
      const result = queenMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("returns false when queen is blocked", () => {
      // arrange
      const startTile = { piece: whitePieces.queen, row: 1, column: "a" };
      const endTile = { piece: whitePieces.queen, row: 6, column: "a" };
      const currentBoardState = [...initialBoard];
      const colourToMove = "white";
      // act
      const result = queenMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(false);
    });
  });
  describe("black queen", () => {
    test("should return true when moving xNegYPos", () => {
      // arrange
      const startTile = { piece: blackPieces.queen, row: 1, column: "f" };
      const endTile = { piece: blackPieces.queen, row: 6, column: "a" };
      const currentBoardState = [...initialBoard];
      currentBoardState[1][4] = "";
      const colourToMove = "white";
      // act
      const result = queenMovement(
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
      const startTile = { piece: blackPieces.queen, row: 1, column: "c" };
      const endTile = { piece: blackPieces.queen, row: 6, column: "h" };
      const currentBoardState = [...initialBoard];
      currentBoardState[1][3] = "";
      const colourToMove = "white";
      // act
      const result = queenMovement(
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
      const startTile = { piece: blackPieces.queen, row: 8, column: "f" };
      const endTile = { piece: blackPieces.queen, row: 3, column: "a" };
      const currentBoardState = [...initialBoard];
      currentBoardState[6][4] = "";
      const colourToMove = "white";
      // act
      const result = queenMovement(
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
      const startTile = { piece: blackPieces.queen, row: 8, column: "c" };
      const endTile = { piece: blackPieces.queen, row: 3, column: "h" };
      const currentBoardState = [...initialBoard];
      currentBoardState[6][3] = "";
      const colourToMove = "white";
      // act
      const result = queenMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("returns true when queen moves yPos", () => {
      // arrange
      const startTile = { piece: blackPieces.queen, row: 8, column: "h" };
      const endTile = { piece: blackPieces.queen, row: 6, column: "h" };
      const currentBoardState = [...initialBoard];
      currentBoardState[6][7].piece = "";
      const colourToMove = "black";
      // act
      const result = queenMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("returns true when queen moves yNeg", () => {
      // arrange
      const startTile = { piece: blackPieces.queen, row: 6, column: "h" };
      const endTile = { piece: blackPieces.queen, row: 8, column: "h" };
      const currentBoardState = [...initialBoard];
      currentBoardState[6][7].piece = "";
      currentBoardState[7][7].piece = "";
      const colourToMove = "black";
      // act
      const result = queenMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("returns true when queen moves xPos", () => {
      // arrange
      const startTile = { piece: blackPieces.queen, row: 6, column: "a" };
      const endTile = { piece: blackPieces.queen, row: 6, column: "h" };
      const currentBoardState = [...initialBoard];
      const colourToMove = "black";
      // act
      const result = queenMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("returns true when queen moves xNeg", () => {
      // arrange
      const startTile = { piece: blackPieces.queen, row: 6, column: "h" };
      const endTile = { piece: blackPieces.queen, row: 6, column: "a" };
      const currentBoardState = [...initialBoard];
      const colourToMove = "black";
      // act
      const result = queenMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("returns false when queen is blocked", () => {
      // arrange
      const startTile = { piece: blackPieces.queen, row: 8, column: "a" };
      const endTile = { piece: blackPieces.queen, row: 6, column: "a" };
      const currentBoardState = [...initialBoard];
      const colourToMove = "black";
      // act
      const result = queenMovement(
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

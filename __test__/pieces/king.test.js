const initialBoard = require("../../utils/board/initialBoard");
const { blackPieces } = require("../../utils/pieces/blackPieces");
const { whitePieces } = require("../../utils/pieces/whitePieces");
const { kingMovement } = require("../../utils/pieces/king/kingMovement");

describe("kingMovement", () => {
  describe("white king", () => {
    test("should return true when moving xNegYPos", () => {
      // arrange
      const startTile = { piece: whitePieces.king, row: 1, column: "f" };
      const endTile = { piece: whitePieces.king, row: 2, column: "e" };
      const currentBoardState = [...initialBoard];
      currentBoardState[1][4] = "";
      const colourToMove = "white";
      // act
      const result = kingMovement(
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
      const startTile = { piece: whitePieces.king, row: 1, column: "c" };
      const endTile = { piece: whitePieces.king, row: 2, column: "d" };
      const currentBoardState = [...initialBoard];
      currentBoardState[1][3] = "";
      const colourToMove = "white";
      // act
      const result = kingMovement(
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
      const startTile = { piece: whitePieces.king, row: 8, column: "f" };
      const endTile = { piece: whitePieces.king, row: 7, column: "e" };
      const currentBoardState = [...initialBoard];
      currentBoardState[6][4] = "";
      const colourToMove = "white";
      // act
      const result = kingMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("should return true when moving xPosYNeg", () => {
      // arrange
      const startTile = { piece: whitePieces.king, row: 8, column: "c" };
      const endTile = { piece: whitePieces.king, row: 7, column: "d" };
      const currentBoardState = [...initialBoard];
      currentBoardState[6][3] = "";
      const colourToMove = "white";
      // act
      const result = kingMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("returns true when king moves yPos", () => {
      // arrange
      const startTile = { piece: whitePieces.king, row: 1, column: "h" };
      const endTile = { piece: whitePieces.king, row: 2, column: "h" };
      const currentBoardState = [...initialBoard];
      currentBoardState[1][7].piece = "";
      const colourToMove = "white";
      // act
      const result = kingMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("returns true when king moves yNeg", () => {
      // arrange
      const startTile = { piece: whitePieces.king, row: 6, column: "h" };
      const endTile = { piece: whitePieces.king, row: 5, column: "h" };
      const currentBoardState = [...initialBoard];
      currentBoardState[1][7].piece = "";
      currentBoardState[0][7].piece = "";
      const colourToMove = "white";
      // act
      const result = kingMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("returns true when king moves xPos", () => {
      // arrange
      const startTile = { piece: whitePieces.king, row: 3, column: "a" };
      const endTile = { piece: whitePieces.king, row: 3, column: "b" };
      const currentBoardState = [...initialBoard];
      const colourToMove = "white";
      // act
      const result = kingMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("returns true when king moves xNeg", () => {
      // arrange
      const startTile = { piece: whitePieces.king, row: 3, column: "h" };
      const endTile = { piece: whitePieces.king, row: 3, column: "g" };
      const currentBoardState = [...initialBoard];
      const colourToMove = "white";
      // act
      const result = kingMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("returns false when king moves more than 1 tile", () => {
      // arrange
      const startTile = { piece: whitePieces.king, row: 3, column: "h" };
      const endTile = { piece: whitePieces.king, row: 3, column: "a" };
      const currentBoardState = [...initialBoard];
      const colourToMove = "white";
      // act
      const result = kingMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(false);
    });
    test("returns false when king is blocked", () => {
      // arrange
      const startTile = { piece: whitePieces.king, row: 1, column: "a" };
      const endTile = { piece: whitePieces.king, row: 6, column: "a" };
      const currentBoardState = [...initialBoard];
      const colourToMove = "white";
      // act
      const result = kingMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(false);
    });
  });
  describe("black king", () => {
    test("should return true when moving xNegYPos", () => {
      // arrange
      const startTile = { piece: blackPieces.king, row: 1, column: "f" };
      const endTile = { piece: blackPieces.king, row: 2, column: "e" };
      const currentBoardState = [...initialBoard];
      currentBoardState[1][4] = "";
      const colourToMove = "white";
      // act
      const result = kingMovement(
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
      const startTile = { piece: blackPieces.king, row: 1, column: "c" };
      const endTile = { piece: blackPieces.king, row: 2, column: "d" };
      const currentBoardState = [...initialBoard];
      currentBoardState[1][3] = "";
      const colourToMove = "white";
      // act
      const result = kingMovement(
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
      const startTile = { piece: blackPieces.king, row: 8, column: "f" };
      const endTile = { piece: blackPieces.king, row: 7, column: "e" };
      const currentBoardState = [...initialBoard];
      currentBoardState[6][4] = "";
      const colourToMove = "white";
      // act
      const result = kingMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("should return true when moving xPosYNeg", () => {
      // arrange
      const startTile = { piece: blackPieces.king, row: 8, column: "c" };
      const endTile = { piece: blackPieces.king, row: 7, column: "d" };
      const currentBoardState = [...initialBoard];
      currentBoardState[6][3] = "";
      const colourToMove = "white";
      // act
      const result = kingMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("returns true when king moves yPos", () => {
      // arrange
      const startTile = { piece: blackPieces.king, row: 6, column: "h" };
      const endTile = { piece: blackPieces.king, row: 7, column: "h" };
      const currentBoardState = [...initialBoard];
      currentBoardState[6][7].piece = "";
      const colourToMove = "black";
      // act
      const result = kingMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("returns true when king moves yNeg", () => {
      // arrange
      const startTile = { piece: blackPieces.king, row: 8, column: "h" };
      const endTile = { piece: blackPieces.king, row: 7, column: "h" };
      const currentBoardState = [...initialBoard];
      currentBoardState[6][7].piece = "";
      currentBoardState[7][7].piece = "";
      const colourToMove = "black";
      // act
      const result = kingMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("returns true when king moves xPos", () => {
      // arrange
      const startTile = { piece: blackPieces.king, row: 6, column: "a" };
      const endTile = { piece: blackPieces.king, row: 6, column: "b" };
      const currentBoardState = [...initialBoard];
      const colourToMove = "black";
      // act
      const result = kingMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("returns true when king moves xNeg", () => {
      // arrange
      const startTile = { piece: blackPieces.king, row: 6, column: "h" };
      const endTile = { piece: blackPieces.king, row: 6, column: "g" };
      const currentBoardState = [...initialBoard];
      const colourToMove = "black";
      // act
      const result = kingMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("returns false when king moves more than 1 tile", () => {
      // arrange
      const startTile = { piece: whitePieces.king, row: 3, column: "h" };
      const endTile = { piece: whitePieces.king, row: 3, column: "a" };
      const currentBoardState = [...initialBoard];
      const colourToMove = "black";
      // act
      const result = kingMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(false);
    });
    test("returns false when king is blocked", () => {
      // arrange
      const startTile = { piece: blackPieces.king, row: 8, column: "a" };
      const endTile = { piece: blackPieces.king, row: 6, column: "a" };
      const currentBoardState = [...initialBoard];
      const colourToMove = "black";
      // act
      const result = kingMovement(
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

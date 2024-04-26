const initialBoard = require("../../utils/board/initialBoard");
const { whitePieces } = require("../../utils/pieces/whitePieces");
const { blackPieces } = require("../../utils/pieces/blackPieces");
const { rookMovement } = require("../../utils/pieces/rook/rookMovement");

describe("rookMovement", () => {
  describe("white Rook", () => {
    test("returns true when rook moves yPos", () => {
      // arrange
      const startTile = { piece: whitePieces.rook, row: 1, column: "h" };
      const endTile = { piece: whitePieces.rook, row: 6, column: "h" };
      const currentBoardState = [...initialBoard];
      currentBoardState[1][7].piece = "";
      const colourToMove = "white";
      // act
      const result = rookMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("returns true when rook moves yNeg", () => {
      // arrange
      const startTile = { piece: whitePieces.rook, row: 6, column: "h" };
      const endTile = { piece: whitePieces.rook, row: 1, column: "h" };
      const currentBoardState = [...initialBoard];
      currentBoardState[1][7].piece = "";
      currentBoardState[0][7].piece = "";
      const colourToMove = "white";
      // act
      const result = rookMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("returns true when rook moves xPos", () => {
      // arrange
      const startTile = { piece: whitePieces.rook, row: 3, column: "a" };
      const endTile = { piece: whitePieces.rook, row: 3, column: "h" };
      const currentBoardState = [...initialBoard];
      const colourToMove = "white";
      // act
      const result = rookMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("returns true when rook moves xNeg", () => {
      // arrange
      const startTile = { piece: whitePieces.rook, row: 3, column: "h" };
      const endTile = { piece: whitePieces.rook, row: 3, column: "a" };
      const currentBoardState = [...initialBoard];
      const colourToMove = "white";
      // act
      const result = rookMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("returns false when rook moves diagonally", () => {
      // arrange
      const startTile = { piece: whitePieces.rook, row: 3, column: "a" };
      const endTile = { piece: whitePieces.rook, row: 6, column: "d" };
      const currentBoardState = [...initialBoard];
      const colourToMove = "white";
      // act
      const result = rookMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(false);
    });
    test("returns false when rook is blocked", () => {
      // arrange
      const startTile = { piece: whitePieces.rook, row: 1, column: "a" };
      const endTile = { piece: whitePieces.rook, row: 6, column: "a" };
      const currentBoardState = [...initialBoard];
      const colourToMove = "white";
      // act
      const result = rookMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(false);
    });
  });
  describe("black Rook", () => {
    test("returns true when rook moves yPos", () => {
      // arrange
      const startTile = { piece: blackPieces.rook, row: 8, column: "h" };
      const endTile = { piece: blackPieces.rook, row: 6, column: "h" };
      const currentBoardState = [...initialBoard];
      currentBoardState[6][7].piece = "";
      const colourToMove = "black";
      // act
      const result = rookMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("returns true when rook moves yNeg", () => {
      // arrange
      const startTile = { piece: blackPieces.rook, row: 6, column: "h" };
      const endTile = { piece: blackPieces.rook, row: 8, column: "h" };
      const currentBoardState = [...initialBoard];
      currentBoardState[6][7].piece = "";
      currentBoardState[7][7].piece = "";
      const colourToMove = "black";
      // act
      const result = rookMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("returns true when rook moves xPos", () => {
      // arrange
      const startTile = { piece: blackPieces.rook, row: 6, column: "a" };
      const endTile = { piece: blackPieces.rook, row: 6, column: "h" };
      const currentBoardState = [...initialBoard];
      const colourToMove = "black";
      // act
      const result = rookMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("returns true when rook moves xNeg", () => {
      // arrange
      const startTile = { piece: blackPieces.rook, row: 6, column: "h" };
      const endTile = { piece: blackPieces.rook, row: 6, column: "a" };
      const currentBoardState = [...initialBoard];
      const colourToMove = "black";
      // act
      const result = rookMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("returns false when rook moves diagonally", () => {
      // arrange
      const startTile = { piece: blackPieces.rook, row: 6, column: "a" };
      const endTile = { piece: blackPieces.rook, row: 3, column: "d" };
      const currentBoardState = [...initialBoard];
      const colourToMove = "black";
      // act
      const result = rookMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(false);
    });
    test("returns false when rook is blocked", () => {
      // arrange
      const startTile = { piece: blackPieces.rook, row: 8, column: "a" };
      const endTile = { piece: blackPieces.rook, row: 6, column: "a" };
      const currentBoardState = [...initialBoard];
      const colourToMove = "black";
      // act
      const result = rookMovement(
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

const initialBoard = require("../../utils/board/initialBoard");
const { whitePieces } = require("../../utils/pieces/whitePieces");
const { knightMovement } = require("../../utils/pieces/knight/knightMovement");
const { blackPieces } = require("../../utils/pieces/blackPieces");

describe("knightMovement", () => {
  describe("white knight", () => {
    test("should return true when knight moves y2x-1", () => {
      // arrange
      const startTile = { piece: whitePieces.knight, row: 1, column: "g" };
      const endTile = { piece: whitePieces.knight, row: 3, column: "f" };
      const currentBoardState = [...initialBoard];
      const colourToMove = "white";
      // act
      const result = knightMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("should return true when knight moves y2x1", () => {
      // arrange
      const startTile = { piece: whitePieces.knight, row: 1, column: "b" };
      const endTile = { piece: whitePieces.knight, row: 3, column: "c" };
      const currentBoardState = [...initialBoard];
      const colourToMove = "white";
      // act
      const result = knightMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("should return true when knight moves y1x-2", () => {
      // arrange
      const startTile = { piece: whitePieces.knight, row: 1, column: "g" };
      const endTile = { piece: whitePieces.knight, row: 2, column: "e" };
      const currentBoardState = [...initialBoard];
      currentBoardState[1][4].piece = "";
      const colourToMove = "white";
      // act
      const result = knightMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("should return true when knight moves y1x2", () => {
      // arrange
      const startTile = { piece: whitePieces.knight, row: 1, column: "b" };
      const endTile = { piece: whitePieces.knight, row: 2, column: "d" };
      const currentBoardState = [...initialBoard];
      currentBoardState[1][3].piece = "";
      const colourToMove = "white";
      // act
      const result = knightMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("should return true when knight moves y-1x-2", () => {
      // arrange
      const startTile = { piece: whitePieces.knight, row: 3, column: "g" };
      const endTile = { piece: whitePieces.knight, row: 2, column: "e" };
      const currentBoardState = [...initialBoard];
      currentBoardState[1][4].piece = "";
      const colourToMove = "white";
      // act
      const result = knightMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("should return true when knight moves y-1x2", () => {
      // arrange
      const startTile = { piece: whitePieces.knight, row: 3, column: "b" };
      const endTile = { piece: whitePieces.knight, row: 2, column: "d" };
      const currentBoardState = [...initialBoard];
      currentBoardState[1][3].piece = "";
      const colourToMove = "white";
      // act
      const result = knightMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("should return true when knight moves y-2x-1", () => {
      // arrange
      const startTile = { piece: whitePieces.knight, row: 3, column: "g" };
      const endTile = { piece: whitePieces.knight, row: 1, column: "f" };
      const currentBoardState = [...initialBoard];
      currentBoardState[0][5].piece = "";
      const colourToMove = "white";
      // act
      const result = knightMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("should return true when knight moves y-2x1", () => {
      // arrange
      const startTile = { piece: whitePieces.knight, row: 3, column: "b" };
      const endTile = { piece: whitePieces.knight, row: 1, column: "c" };
      const currentBoardState = [...initialBoard];
      currentBoardState[0][2].piece = "";
      const colourToMove = "white";
      // act
      const result = knightMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("should return true when knight lands on black piece", () => {
      // arrange
      const startTile = { piece: whitePieces.knight, row: 1, column: "g" };
      const endTile = { piece: whitePieces.knight, row: 3, column: "f" };
      const currentBoardState = [...initialBoard];
      currentBoardState[6][5].piece = "";
      currentBoardState[2][5].piece = blackPieces.pawn;
      const colourToMove = "white";
      // act
      const result = knightMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("should return false when knight lands on white piece", () => {
      // arrange
      const startTile = { piece: whitePieces.knight, row: 1, column: "g" };
      const endTile = { piece: whitePieces.knight, row: 3, column: "f" };
      const currentBoardState = [...initialBoard];
      currentBoardState[1][5].piece = "";
      currentBoardState[2][5].piece = whitePieces.pawn;
      const colourToMove = "white";
      // act
      const result = knightMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(false);
    });
    test("should return false when knight plays illegal move", () => {
      // arrange
      const startTile = { piece: whitePieces.knight, row: 1, column: "g" };
      const endTile = { piece: whitePieces.knight, row: 2, column: "g" };
      const currentBoardState = [...initialBoard];
      currentBoardState[1][6].piece = "";
      const colourToMove = "white";
      // act
      const result = knightMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(false);
    });
  });
  describe("black knight", () => {
    test("should return true when knight moves y2x-1", () => {
      // arrange
      const startTile = { piece: blackPieces.knight, row: 6, column: "g" };
      const endTile = { piece: blackPieces.knight, row: 8, column: "f" };
      const currentBoardState = [...initialBoard];
      currentBoardState[7][5].piece = "";
      const colourToMove = "black";
      // act
      const result = knightMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("should return true when knight moves y2x1", () => {
      // arrange
      const startTile = { piece: blackPieces.knight, row: 6, column: "b" };
      const endTile = { piece: blackPieces.knight, row: 8, column: "c" };
      const currentBoardState = [...initialBoard];
      currentBoardState[7][2].piece = "";
      const colourToMove = "black";
      // act
      const result = knightMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("should return true when knight moves y1x-2", () => {
      // arrange
      const startTile = { piece: blackPieces.knight, row: 6, column: "g" };
      const endTile = { piece: blackPieces.knight, row: 7, column: "e" };
      const currentBoardState = [...initialBoard];
      currentBoardState[6][4].piece = "";
      const colourToMove = "black";
      // act
      const result = knightMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("should return true when knight moves y1x2", () => {
      // arrange
      const startTile = { piece: blackPieces.knight, row: 6, column: "b" };
      const endTile = { piece: blackPieces.knight, row: 7, column: "d" };
      const currentBoardState = [...initialBoard];
      currentBoardState[6][3].piece = "";
      const colourToMove = "black";
      // act
      const result = knightMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("should return true when knight moves y-1x-2", () => {
      // arrange
      const startTile = { piece: blackPieces.knight, row: 8, column: "g" };
      const endTile = { piece: blackPieces.knight, row: 7, column: "e" };
      const currentBoardState = [...initialBoard];
      currentBoardState[6][4].piece = "";
      const colourToMove = "black";
      // act
      const result = knightMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("should return true when knight moves y-1x2", () => {
      // arrange
      const startTile = { piece: blackPieces.knight, row: 8, column: "b" };
      const endTile = { piece: blackPieces.knight, row: 7, column: "d" };
      const currentBoardState = [...initialBoard];
      currentBoardState[6][3].piece = "";
      const colourToMove = "black";
      // act
      const result = knightMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("should return true when knight moves y-2x-1", () => {
      // arrange
      const startTile = { piece: blackPieces.knight, row: 8, column: "g" };
      const endTile = { piece: blackPieces.knight, row: 6, column: "f" };
      const currentBoardState = [...initialBoard];
      const colourToMove = "black";
      // act
      const result = knightMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("should return true when knight moves y-2x1", () => {
      // arrange
      const startTile = { piece: blackPieces.knight, row: 8, column: "b" };
      const endTile = { piece: blackPieces.knight, row: 6, column: "c" };
      const currentBoardState = [...initialBoard];
      const colourToMove = "black";
      // act
      const result = knightMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("should return true when knight lands on white piece", () => {
      // arrange
      const startTile = { piece: blackPieces.knight, row: 8, column: "g" };
      const endTile = { piece: blackPieces.knight, row: 6, column: "f" };
      const currentBoardState = [...initialBoard];
      currentBoardState[1][5].piece = "";
      currentBoardState[5][5].piece = whitePieces.pawn;
      const colourToMove = "black";
      // act
      const result = knightMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("should return false when knight lands on black piece", () => {
      // arrange
      const startTile = { piece: blackPieces.knight, row: 8, column: "g" };
      const endTile = { piece: blackPieces.knight, row: 6, column: "f" };
      const currentBoardState = [...initialBoard];
      currentBoardState[6][5].piece = "";
      currentBoardState[5][5].piece = blackPieces.pawn;
      const colourToMove = "black";
      // act
      const result = knightMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(false);
    });
    test("should return false when knight plays illegal move", () => {
      // arrange
      const startTile = { piece: blackPieces.knight, row: 8, column: "g" };
      const endTile = { piece: blackPieces.knight, row: 7, column: "g" };
      const currentBoardState = [...initialBoard];
      currentBoardState[6][6].piece = "";
      const colourToMove = "black";
      // act
      const result = knightMovement(
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

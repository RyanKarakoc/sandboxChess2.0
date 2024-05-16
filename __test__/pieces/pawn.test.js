const initialBoard = require("../../utils/board/initialBoard");
const { blackPieces } = require("../../utils/pieces/blackPieces");
const { whitePieces } = require("../../utils/pieces/whitePieces");
const { pawnMovement } = require("../../utils/pieces/pawn/pawnMovement");
const { checkEnPassant } = require("../../utils/pieces/pawn/checkEnPassant");

describe("pawnMovement", () => {
  describe("white pawn", () => {
    test("returns true when moving 2 tiles from starting position", () => {
      // arrange
      const startTile = { piece: whitePieces.pawn, row: 2, column: "h" };
      const endTile = { piece: whitePieces.pawn, row: 4, column: "h" };
      const currentBoardState = [...initialBoard];
      const colourToMove = "white";
      // act
      const result = pawnMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("returns true when moving 1 tile", () => {
      // arrange
      const startTile = { piece: whitePieces.pawn, row: 2, column: "h" };
      const endTile = { piece: whitePieces.pawn, row: 3, column: "h" };
      const currentBoardState = [...initialBoard];
      const colourToMove = "white";
      // act
      const result = pawnMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("returns true when taking black piece xNeg", () => {
      // arrange
      const startTile = { piece: whitePieces.pawn, row: 2, column: "h" };
      const endTile = { piece: whitePieces.pawn, row: 3, column: "g" };
      const currentBoardState = [...initialBoard];
      currentBoardState[2][6].piece = blackPieces.pawn;
      currentBoardState[6][6].piece = "";
      const colourToMove = "white";
      // act
      const result = pawnMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("returns true when taking black piece xPos", () => {
      // arrange
      const startTile = { piece: whitePieces.pawn, row: 2, column: "a" };
      const endTile = { piece: whitePieces.pawn, row: 3, column: "b" };
      const currentBoardState = [...initialBoard];
      currentBoardState[2][1].piece = blackPieces.pawn;
      currentBoardState[6][1].piece = "";
      const colourToMove = "white";
      // act
      const result = pawnMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("returns false when playing an illegal move", () => {
      // arrange
      const startTile = { piece: whitePieces.pawn, row: 2, column: "a" };
      const endTile = { piece: whitePieces.pawn, row: 5, column: "a" };
      const currentBoardState = [...initialBoard];
      const colourToMove = "white";
      // act
      const result = pawnMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(false);
    });
    test("returns false when blocked by a piece", () => {
      // arrange
      const startTile = { piece: whitePieces.pawn, row: 4, column: "a" };
      const endTile = { piece: whitePieces.pawn, row: 5, column: "a" };
      const currentBoardState = [...initialBoard];
      currentBoardState[1][0].piece = "";
      currentBoardState[3][0].piece = whitePieces.pawn;
      currentBoardState[6][0].piece = "";
      currentBoardState[4][0].piece = blackPieces.pawn;
      const colourToMove = "white";
      // act
      const result = pawnMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(false);
    });
  });
  describe("black pawn", () => {
    test("returns true when moving 2 tiles from starting position", () => {
      // arrange
      const startTile = { piece: blackPieces.pawn, row: 7, column: "h" };
      const endTile = { piece: blackPieces.pawn, row: 5, column: "h" };
      const currentBoardState = [...initialBoard];
      const colourToMove = "black";
      // act
      const result = pawnMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("returns true when moving 1 tile", () => {
      // arrange
      const startTile = { piece: blackPieces.pawn, row: 7, column: "h" };
      const endTile = { piece: blackPieces.pawn, row: 6, column: "h" };
      const currentBoardState = [...initialBoard];
      const colourToMove = "black";
      // act
      const result = pawnMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("returns true when taking black piece xNeg", () => {
      // arrange
      const startTile = { piece: blackPieces.pawn, row: 7, column: "h" };
      const endTile = { piece: blackPieces.pawn, row: 6, column: "g" };
      const currentBoardState = [...initialBoard];
      currentBoardState[5][6].piece = whitePieces.pawn;
      currentBoardState[1][6].piece = "";
      const colourToMove = "black";
      // act
      const result = pawnMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("returns true when taking black piece xPos", () => {
      // arrange
      const startTile = { piece: blackPieces.pawn, row: 7, column: "a" };
      const endTile = { piece: blackPieces.pawn, row: 6, column: "b" };
      const currentBoardState = [...initialBoard];
      currentBoardState[5][1].piece = whitePieces.pawn;
      currentBoardState[1][1].piece = "";
      const colourToMove = "black";
      // act
      const result = pawnMovement(
        startTile,
        endTile,
        currentBoardState,
        colourToMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("returns false when playing an illegal move", () => {
      // arrange
      const startTile = { piece: blackPieces.pawn, row: 7, column: "a" };
      const endTile = { piece: blackPieces.pawn, row: 4, column: "a" };
      const currentBoardState = [...initialBoard];
      const colourToMove = "black";
      // act
      const result = pawnMovement(
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

describe("checkEnPassant", () => {
  describe("white pawn", () => {
    test("should return true when enPassant xNeg", () => {
      // arrange
      const startTile = { piece: whitePieces.pawn, row: 5, column: "e" };
      const currentBoardState = [...initialBoard];
      currentBoardState[1][4].piece = "";
      currentBoardState[5][3].piece = whitePieces.pawn;
      currentBoardState[6][3].piece = "";
      currentBoardState[4][3].piece = blackPieces.pawn;
      const colourToMove = "white";
      const previousMove = [3, blackPieces.pawn, ["d", 7], ["d", 5]];
      // act
      const result = checkEnPassant(
        startTile,
        currentBoardState,
        colourToMove,
        previousMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("should return true when enPassant xPos", () => {
      // arrange
      const startTile = { piece: whitePieces.pawn, row: 5, column: "e" };
      const currentBoardState = [...initialBoard];
      currentBoardState[1][4].piece = "";
      currentBoardState[5][5].piece = whitePieces.pawn;
      currentBoardState[6][5].piece = "";
      currentBoardState[4][5].piece = blackPieces.pawn;
      const colourToMove = "white";
      const previousMove = [3, blackPieces.pawn, ["f", 7], ["f", 5]];
      // act
      const result = checkEnPassant(
        startTile,
        currentBoardState,
        colourToMove,
        previousMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("should return false when cannot perform enPassant", () => {
      // arrange
      const startTile = { piece: whitePieces.pawn, row: 5, column: "e" };
      const currentBoardState = [...initialBoard];
      currentBoardState[1][4].piece = "";
      currentBoardState[5][5].piece = whitePieces.pawn;
      currentBoardState[6][5].piece = "";
      currentBoardState[4][5].piece = blackPieces.pawn;
      const colourToMove = "white";
      const previousMove = [3, blackPieces.pawn, ["f", 7], ["f", 6]];
      // act
      const result = checkEnPassant(
        startTile,
        currentBoardState,
        colourToMove,
        previousMove
      );
      // assert
      expect(result).toBe(false);
    });
  });
  describe("black pawn", () => {
    test("should return true when enPassant xNeg", () => {
      // arrange
      const startTile = { piece: blackPieces.pawn, row: 4, column: "e" };
      const currentBoardState = [...initialBoard];
      currentBoardState[6][4].piece = "";
      currentBoardState[2][3].piece = blackPieces.pawn;
      currentBoardState[1][3].piece = "";
      currentBoardState[3][3].piece = whitePieces.pawn;
      const colourToMove = "black";
      const previousMove = [3, whitePieces.pawn, ["d", 2], ["d", 4]];
      // act
      const result = checkEnPassant(
        startTile,
        currentBoardState,
        colourToMove,
        previousMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("should return true when enPassant xPos", () => {
      // arrange
      const startTile = { piece: blackPieces.pawn, row: 4, column: "e" };
      const currentBoardState = [...initialBoard];
      currentBoardState[6][4].piece = "";
      currentBoardState[2][5].piece = blackPieces.pawn;
      currentBoardState[1][5].piece = "";
      currentBoardState[3][5].piece = whitePieces.pawn;
      const colourToMove = "black";
      const previousMove = [3, whitePieces.pawn, ["f", 2], ["f", 4]];
      // act
      const result = checkEnPassant(
        startTile,
        currentBoardState,
        colourToMove,
        previousMove
      );
      // assert
      expect(result).toBe(true);
    });
    test("should return false when cannot perform enPassant", () => {
      // arrange
      const startTile = { piece: blackPieces.pawn, row: 4, column: "e" };
      const currentBoardState = [...initialBoard];
      currentBoardState[6][4].piece = "";
      currentBoardState[2][3].piece = blackPieces.pawn;
      currentBoardState[1][3].piece = "";
      currentBoardState[3][3].piece = whitePieces.pawn;
      const colourToMove = "black";
      const previousMove = [3, whitePieces.pawn, ["d", 2], ["d", 3]];
      // act
      const result = checkEnPassant(
        startTile,
        currentBoardState,
        colourToMove,
        previousMove
      );
      // assert
      expect(result).toBe(false);
    });
  });
});

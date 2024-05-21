const initialBoard = require("../../utils/board/initialBoard");
const { isCastleBlocked } = require("../../utils/movement/isCastleBlocked");
const { blackPieces } = require("../../utils/pieces/blackPieces");
const { whitePieces } = require("../../utils/pieces/whitePieces");

describe("isCastleBlocked", () => {
  describe("white castle", () => {
    describe("king side castle", () => {
      test("should return false when nothing blocking castling", () => {
        // arrange
        const directionMoved = "xPos";
        const currentBoardState = [...initialBoard];
        currentBoardState[0][5].piece = "";
        currentBoardState[0][6].piece = "";
        const colourToMove = "white";
        // act
        const result = isCastleBlocked(
          directionMoved,
          currentBoardState,
          colourToMove
        );
        //assert
        expect(result).toBe(false);
      });
      test("should return true when blocked from castling", () => {
        // arrange
        const directionMoved = "xPos";
        const currentBoardState = [...initialBoard];
        currentBoardState[0][5].piece = blackPieces.knight;
        currentBoardState[0][6].piece = "";
        const colourToMove = "white";
        // act
        const result = isCastleBlocked(
          directionMoved,
          currentBoardState,
          colourToMove
        );
        //assert
        expect(result).toBe(true);
      });
    });
    describe("queen side castle", () => {
      test("should return false when nothing blocking castling", () => {
        // arrange
        const directionMoved = "xNeg";
        const currentBoardState = [...initialBoard];
        currentBoardState[0][2].piece = "";
        currentBoardState[0][3].piece = "";
        const colourToMove = "white";
        // act
        const result = isCastleBlocked(
          directionMoved,
          currentBoardState,
          colourToMove
        );
        //assert
        expect(result).toBe(false);
      });
      test("should return true when blocked from castling", () => {
        // arrange
        const directionMoved = "xPos";
        const currentBoardState = [...initialBoard];
        currentBoardState[0][2].piece = blackPieces.knight;
        currentBoardState[0][3].piece = "";
        const colourToMove = "white";
        // act
        const result = isCastleBlocked(
          directionMoved,
          currentBoardState,
          colourToMove
        );
        //assert
        expect(result).toBe(true);
      });
    });
  });
  describe("black castle", () => {
    describe("king side castle", () => {
      test("should return false when nothing blocking castling", () => {
        // arrange
        const directionMoved = "xPos";
        const currentBoardState = [...initialBoard];
        currentBoardState[7][5].piece = "";
        currentBoardState[7][6].piece = "";
        const colourToMove = "black";
        // act
        const result = isCastleBlocked(
          directionMoved,
          currentBoardState,
          colourToMove
        );
        //assert
        expect(result).toBe(false);
      });
      test("should return true when blocked from castling", () => {
        // arrange
        const directionMoved = "xPos";
        const currentBoardState = [...initialBoard];
        currentBoardState[7][5].piece = whitePieces.knight;
        currentBoardState[7][6].piece = "";
        const colourToMove = "black";
        // act
        const result = isCastleBlocked(
          directionMoved,
          currentBoardState,
          colourToMove
        );
        //assert
        expect(result).toBe(true);
      });
    });
    describe("queen side castle", () => {
      test("should return false when nothing blocking castling", () => {
        // arrange
        const directionMoved = "xNeg";
        const currentBoardState = [...initialBoard];
        currentBoardState[7][2].piece = "";
        currentBoardState[7][3].piece = "";
        const colourToMove = "black";
        // act
        const result = isCastleBlocked(
          directionMoved,
          currentBoardState,
          colourToMove
        );
        //assert
        expect(result).toBe(false);
      });
      test("should return true when blocked from castling", () => {
        // arrange
        const directionMoved = "xPos";
        const currentBoardState = [...initialBoard];
        currentBoardState[7][2].piece = whitePieces.knight;
        currentBoardState[7][3].piece = "";
        const colourToMove = "black";
        // act
        const result = isCastleBlocked(
          directionMoved,
          currentBoardState,
          colourToMove
        );
        //assert
        expect(result).toBe(true);
      });
    });
  });
});

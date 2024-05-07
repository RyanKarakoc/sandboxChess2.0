const { createMoveArray } = require("../../utils/movement/createMoveArray");
const initialBoard = require("../../utils/board/initialBoard");
const { whitePieces } = require("../../utils/pieces/whitePieces");
const { blackPieces } = require("../../utils/pieces/blackPieces");

describe("createMoveArray", () => {
  test("should create a move array without piece capture", () => {
    // arrange
    const moveNumber = 1;
    const movingPiece = whitePieces.pawn;
    const startTile = { piece: whitePieces.pawn, column: "c", row: 2 };
    const endTile = { piece: whitePieces.pawn, column: "c", row: 4 };
    const currentBoardState = [...initialBoard];
    const colourToMove = "white";
    const expectedMoveArray = [1, whitePieces.pawn, ["c", 2], ["c", 4]];
    // act
    const result = createMoveArray(
      moveNumber,
      movingPiece,
      startTile,
      endTile,
      currentBoardState,
      colourToMove
    );
    // assert
    expect(result).toEqual(expectedMoveArray);
  });
  test("should create a move array with piece capture", () => {
    // arrange
    const moveNumber = 3;
    const movingPiece = whitePieces.pawn;
    const startTile = { piece: whitePieces.pawn, column: "e", row: 4 };
    const endTile = { piece: blackPieces.pawn, column: "d", row: 5 };
    const currentBoardState = [...initialBoard];
    currentBoardState[1][4].piece = "";
    currentBoardState[6][3].piece = "";
    currentBoardState[3][4].piece = whitePieces.pawn;
    currentBoardState[4][3].piece = blackPieces.pawn;
    const colourToMove = "white";
    const expectedMoveArray = [3, whitePieces.pawn, ["e", 4], ["xd", 5]];
    // act
    const result = createMoveArray(
      moveNumber,
      movingPiece,
      startTile,
      endTile,
      currentBoardState,
      colourToMove
    );
    // assert
    expect(result).toEqual(expectedMoveArray);
  });
  test("should create a move array with correct indices", () => {
    // arrange
    const moveNumber = 3;
    const movingPiece = "Bishop";
    const startTile = { piece: whitePieces.bishop, column: "e", row: 4 };
    const endTile = { piece: "", column: "f", row: 5 };
    const currentBoardState = [...initialBoard];
    const colourToMove = "white";
    const expectedMoveArray = [3, "Bishop", ["e", 4], ["f", 5]];
    // act
    const result = createMoveArray(
      moveNumber,
      movingPiece,
      startTile,
      endTile,
      currentBoardState,
      colourToMove
    );
    // assert
    expect(result[0]).toBe(expectedMoveArray[0]); // Check move number
    expect(result[1]).toBe(expectedMoveArray[1]); // Check moving piece
    expect(result[2][0]).toBe(expectedMoveArray[2][0]); // Check start tile column
    expect(result[2][1]).toBe(expectedMoveArray[2][1]); // Check start tile row
    expect(result[3][0]).toBe(expectedMoveArray[3][0]); // Check end tile column
    expect(result[3][1]).toBe(expectedMoveArray[3][1]); // Check end tile row
  });
});

const { boardUpdate } = require("../../utils/board/boardUpdate");
const initialBoard = require("../../utils/board/initialBoard");
const { blackPieces } = require("../../utils/pieces/blackPieces");
const { whitePieces } = require("../../utils/pieces/whitePieces");

describe("boardUpdate", () => {
  test("should update the board to show new position (pawn)", () => {
    // arrange
    const startTile = { piece: whitePieces.pawn, row: 2, column: "e" };
    const endTile = { piece: whitePieces.pawn, row: 4, column: "e" };
    const board = initialBoard;
    const movingPiece = whitePieces.pawn;
    const finalBoard = [...initialBoard];
    finalBoard[1][4].piece = "";
    finalBoard[3][4].piece = whitePieces.pawn;
    // act
    const result = boardUpdate(startTile, endTile, board, movingPiece);
    // assert
    expect(result).toEqual(finalBoard);
  });
  test("should update the board to show new position(knight)", () => {
    // arrange
    const startTile = { piece: whitePieces.knight, row: 1, column: "g" };
    const endTile = { piece: whitePieces.knight, row: 3, column: "f" };
    const board = initialBoard;
    const movingPiece = whitePieces.knight;
    const finalBoard = [...board];
    finalBoard[0][6].piece = "";
    finalBoard[2][5].piece = whitePieces.knight;
    // act
    const result = boardUpdate(startTile, endTile, board, movingPiece);
    // assert
    expect(result).toEqual(finalBoard);
  });
  test("should update the board to show new position(bishop)", () => {
    // arrange
    const startTile = { piece: whitePieces.bishop, row: 1, column: "f" };
    const endTile = { piece: whitePieces.bishop, row: 6, column: "a" };
    const board = initialBoard;
    board[1][4].piece = "";
    board[2][4].piece = whitePieces.pawn;
    const movingPiece = whitePieces.bishop;
    const finalBoard = [...board];
    finalBoard[0][5].piece = "";
    finalBoard[5][0].piece = whitePieces.bishop;
    // act
    const result = boardUpdate(startTile, endTile, board, movingPiece);
    // assert
    expect(result).toEqual(finalBoard);
  });
  test("should update the board to show new position(rook)", () => {
    // arrange
    const startTile = { piece: whitePieces.rook, row: 1, column: "h" };
    const endTile = { piece: whitePieces.rook, row: 5, column: "h" };
    const board = initialBoard;
    board[1][7].piece = "";
    board[5][7].piece = whitePieces.pawn;
    const movingPiece = whitePieces.rook;
    const finalBoard = [...board];
    finalBoard[0][7].piece = "";
    finalBoard[4][7].piece = whitePieces.rook;
    // act
    const result = boardUpdate(startTile, endTile, board, movingPiece);
    // assert
    expect(result).toEqual(finalBoard);
  });
  test("should update the board to show new position(enPassant)", () => {
    // arrange
    const startTile = { piece: whitePieces.pawn, row: 5, column: "e" };
    const endTile = { piece: whitePieces.pawn, row: 6, column: "d" };
    const currentBoardState = initialBoard;
    currentBoardState[1][4].piece = "";
    currentBoardState[5][3].piece = whitePieces.pawn;
    currentBoardState[6][3].piece = "";
    const movingPiece = whitePieces.pawn;
    const colourToMove = "white";
    const previousMove = [3, blackPieces.pawn, ["d", 7], ["d", 5]];
    const finalBoard = [...currentBoardState];
    finalBoard[6][3].piece = "";
    finalBoard[5][3].piece = whitePieces.pawn;
    // act
    const result = boardUpdate(
      startTile,
      endTile,
      currentBoardState,
      movingPiece,
      colourToMove,
      previousMove
    );
    // assert
    expect(result).toEqual(finalBoard);
  });
});

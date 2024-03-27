"use client";

const styles = require("./style");

import BlackBishop from "../pieces/bishop/BlackBishop";
import WhiteBishop from "../pieces/bishop/WhiteBishop";
import BlackKing from "../pieces/king/BlackKing";
import WhiteKing from "../pieces/king/WhiteKing";
import BlackKnight from "../pieces/knight/BlackKnight";
import WhiteKnight from "../pieces/knight/WhiteKnight";
import BlackPawn from "../pieces/pawn/BlackPawn";
import WhitePawn from "../pieces/pawn/WhitePawn";
import BlackQueen from "../pieces/queen/BlackQueen";
import WhiteQueen from "../pieces/queen/WhiteQueen";
import BlackRook from "../pieces/rook/BlackRook";
import WhiteRook from "../pieces/rook/WhiteRook";

const Piece = ({ type }) => {
  const renderPiece = () => {
    switch (type) {
      case "♟︎":
        return <BlackPawn />;
      case "♙":
        return <WhitePawn />;
      case "♜":
        return <BlackRook />;
      case "♖":
        return <WhiteRook />;
      case "♞":
        return <BlackKnight />;
      case "♘":
        return <WhiteKnight />;
      case "♝":
        return <BlackBishop />;
      case "♗":
        return <WhiteBishop />;
      case "♚":
        return <BlackKing />;
      case "♔":
        return <WhiteKing />;
      case "♛":
        return <BlackQueen />;
      case "♕":
        return <WhiteQueen />;
      default:
        return null;
    }
  };
  return <div className={styles.piecePlacement()}>{renderPiece()}</div>;
};

const Board = () => {
  const boardState = [
    [
      { piece: "♖", row: 1, column: "a" },
      { piece: "♘", row: 1, column: "b" },
      { piece: "♗", row: 1, column: "c" },
      { piece: "♕", row: 1, column: "d" },
      { piece: "♔", row: 1, column: "e" },
      { piece: "♗", row: 1, column: "f" },
      { piece: "♘", row: 1, column: "g" },
      { piece: "♖", row: 1, column: "h" },
    ],
    [
      { piece: "♙", row: 2, column: "a" },
      { piece: "♙", row: 2, column: "b" },
      { piece: "♙", row: 2, column: "c" },
      { piece: "♙", row: 2, column: "d" },
      { piece: "♙", row: 2, column: "e" },
      { piece: "♙", row: 2, column: "f" },
      { piece: "♙", row: 2, column: "g" },
      { piece: "♙", row: 2, column: "h" },
    ],
    [
      { piece: "", row: 3, column: "a" },
      { piece: "", row: 3, column: "b" },
      { piece: "", row: 3, column: "c" },
      { piece: "", row: 3, column: "d" },
      { piece: "", row: 3, column: "e" },
      { piece: "", row: 3, column: "f" },
      { piece: "", row: 3, column: "g" },
      { piece: "", row: 3, column: "h" },
    ],
    [
      { piece: "", row: 4, column: "a" },
      { piece: "", row: 4, column: "b" },
      { piece: "", row: 4, column: "c" },
      { piece: "", row: 4, column: "d" },
      { piece: "", row: 4, column: "e" },
      { piece: "", row: 4, column: "f" },
      { piece: "", row: 4, column: "g" },
      { piece: "", row: 4, column: "h" },
    ],
    [
      { piece: "", row: 5, column: "a" },
      { piece: "", row: 5, column: "b" },
      { piece: "", row: 5, column: "c" },
      { piece: "", row: 5, column: "d" },
      { piece: "", row: 5, column: "e" },
      { piece: "", row: 5, column: "f" },
      { piece: "", row: 5, column: "g" },
      { piece: "", row: 5, column: "h" },
    ],
    [
      { piece: "", row: 6, column: "a" },
      { piece: "", row: 6, column: "b" },
      { piece: "", row: 6, column: "c" },
      { piece: "", row: 6, column: "d" },
      { piece: "", row: 6, column: "e" },
      { piece: "", row: 6, column: "f" },
      { piece: "", row: 6, column: "g" },
      { piece: "", row: 6, column: "h" },
    ],
    [
      { piece: "♟︎", row: 7, column: "a" },
      { piece: "♟︎", row: 7, column: "b" },
      { piece: "♟︎", row: 7, column: "c" },
      { piece: "♟︎", row: 7, column: "d" },
      { piece: "♟︎", row: 7, column: "e" },
      { piece: "♟︎", row: 7, column: "f" },
      { piece: "♟︎", row: 7, column: "g" },
      { piece: "♟︎", row: 7, column: "h" },
    ],
    [
      { piece: "♜", row: 8, column: "a" },
      { piece: "♞", row: 8, column: "b" },
      { piece: "♝", row: 8, column: "c" },
      { piece: "♛", row: 8, column: "d" },
      { piece: "♚", row: 8, column: "e" },
      { piece: "♝", row: 8, column: "f" },
      { piece: "♞", row: 8, column: "g" },
      { piece: "♜", row: 8, column: "h" },
    ],
  ];
  boardState.reverse();

  return (
    <div className={styles.boardContainer()}>
      <div className={styles.boardPadding()}>
        <div className={styles.boardBorder()}>
          {boardState.map((row, rowIndex) => (
            <div key={rowIndex} className={styles.row()}>
              {row.map((tile, colIndex) => (
                // tile div
                <div
                  key={`${colIndex}${rowIndex}`}
                  className={styles.tile(rowIndex, colIndex)}
                >
                  {/* Display Pieces */}
                  {tile && <Piece type={tile.piece} />}
                  {/* Display Tile Column Letters */}
                  {tile.row === 1 ? (
                    <div className={styles.rowText(rowIndex, colIndex)}>
                      {tile.column}
                    </div>
                  ) : null}
                  {/* Display Tile Row Numbers */}
                  {tile.column === "a" ? (
                    <div className={styles.columnText(rowIndex, colIndex)}>
                      {tile.row}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Board;

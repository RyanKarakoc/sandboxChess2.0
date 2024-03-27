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
    ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"],
    ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["♟︎", "♟︎", "♟︎", "♟︎", "♟︎", "♟︎", "♟︎", "♟︎"],
    ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
  ];
  boardState.reverse();

  return (
    <div className={styles.boardContainer()}>
      <div className={styles.boardPadding()}>
        <div className={styles.boardBorder()}>
          {boardState.map((row, rowIndex) => (
            <div key={rowIndex} className={styles.row()}>
              {row.map((tile, colIndex) => (
                <div key={colIndex} className={styles.tile(rowIndex, colIndex)}>
                  {tile && <Piece type={tile} />}
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

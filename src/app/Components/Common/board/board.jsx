"use client";

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

const tileColor = require("./tileColour");

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
  return (
    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
      {renderPiece()}
    </div>
  );
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
    <div className="flex justify-center items-center mb-20">
      <div className="border-4 border-solid border-black rounded-md p-10 bg-amber-200">
        <div className="border-4 border-black">
          {boardState.map((row, rowIndex) => (
            <div key={rowIndex} className="flex">
              {row.map((tile, colIndex) => (
                <div
                  key={colIndex}
                  className={`relative h-10 md:h-20 w-10 md:w-20 select-none ${tileColor(
                    rowIndex,
                    colIndex
                  )}`}
                >
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

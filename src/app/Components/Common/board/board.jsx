"use client";

const styles = require("./style");

import { useEffect, useState } from "react";
import { useGlobalState } from "../context/GlobabStateProvider";
const {
  boardMouseDown,
  boardDragStart,
  boardDrag,
  boardDragOver,
  boardDrop,
} = require("../../../../../utils/events");
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
import { pieceMovement } from "../../../../../utils/pieces/pieceMovement";
import initialBoard from "../../../../../utils/board/initialBoard";
import { boardUpdate } from "../../../../../utils/board/boardUpdate";
import { playSound } from "../../../../../utils/playSound";
import { createMoveArray } from "../../../../../utils/movement/createMoveArray";

const Piece = ({ tile }) => {
  const renderPiece = () => {
    switch (tile.piece) {
      case "♟︎":
        return <BlackPawn tile={tile} />;
      case "♙":
        return <WhitePawn tile={tile} />;
      case "♜":
        return <BlackRook tile={tile} />;
      case "♖":
        return <WhiteRook tile={tile} />;
      case "♞":
        return <BlackKnight tile={tile} />;
      case "♘":
        return <WhiteKnight tile={tile} />;
      case "♝":
        return <BlackBishop tile={tile} />;
      case "♗":
        return <WhiteBishop tile={tile} />;
      case "♚":
        return <BlackKing tile={tile} />;
      case "♔":
        return <WhiteKing tile={tile} />;
      case "♛":
        return <BlackQueen tile={tile} />;
      case "♕":
        return <WhiteQueen tile={tile} />;
      default:
        return null;
    }
  };
  return <div className={styles.piecePlacement}>{renderPiece()}</div>;
};

const Board = () => {
  const initialBoardState = [...initialBoard];
  initialBoardState.reverse();
  const {
    startTile,
    setStartTile,
    endTile,
    setEndTile,
    moveNumber,
    setMoveNumber,
    colourToMove,
    moves,
    setMoves,
    previousMove,
  } = useGlobalState();
  const [boardState, setBoardState] = useState(initialBoardState);
  const [movingPiece, setMovingPiece] = useState("");
  const [playMove, setPlayMove] = useState(false);

  // once endtile has been setup we can now check the movement
  useEffect(() => {
    setPlayMove(false);
    if (endTile) {
      const currentBoardState = [...boardState].reverse();
      if (
        pieceMovement(
          startTile,
          endTile,
          currentBoardState,
          movingPiece,
          colourToMove,
          previousMove
        )
      ) {
        const addMove = createMoveArray(
          moveNumber,
          movingPiece,
          startTile,
          endTile,
          currentBoardState,
          colourToMove,
          previousMove
        );
        setMoves((prevMoves) => [...prevMoves, addMove]);
        playSound(
          startTile,
          endTile,
          currentBoardState,
          colourToMove,
          previousMove
        );
        const newBoard = boardUpdate(
          startTile,
          endTile,
          currentBoardState,
          movingPiece,
          colourToMove,
          previousMove
        );
        newBoard.reverse();
        setBoardState(newBoard);
        setMoveNumber((prevNumber) => prevNumber + 1);
      }
    }
  }, [playMove]);

  return (
    <div className={styles.boardContainer}>
      <div className={styles.boardPadding}>
        <div className={styles.boardBorder}>
          {boardState.map((row, rowIndex) => (
            <div key={rowIndex} className={styles.row}>
              {row.map((tile, colIndex) => (
                // tile div
                <div
                  key={`${colIndex}${rowIndex}`}
                  className={
                    (rowIndex + colIndex) % 2 === 0
                      ? styles.lightTile
                      : styles.darkTile
                  }
                  // eventFunctions
                  onMouseDown={(e) => boardMouseDown(e, setStartTile, tile)}
                  onDragStart={(e) => boardDragStart(e, setMovingPiece, tile)}
                  onDrag={(e) => boardDrag()}
                  onDragOver={(e) => boardDragOver(e)}
                  onDrop={(e) => boardDrop(e, setEndTile, tile, setPlayMove)}
                >
                  {/* Display Pieces */}
                  {tile && <Piece type={tile.piece} tile={tile} />}
                  {/* Display Tile Column Letters */}
                  {tile.row === 1 ? (
                    <div
                      className={
                        (rowIndex + colIndex) % 2 !== 0
                          ? styles.rowText.darkTileText
                          : styles.rowText.lightTileText
                      }
                    >
                      {tile.column}
                    </div>
                  ) : null}
                  {/* Display Tile Row Numbers */}
                  {tile.column === "a" ? (
                    <div
                      className={
                        (rowIndex + colIndex) % 2 !== 0
                          ? styles.columnText.darkTileText
                          : styles.columnText.lightTileText
                      }
                    >
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

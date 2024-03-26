"use client";

const Board = () => {
  const initialBoardState = [
    ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"],
    ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["♟︎", "♟︎", "♟︎", "♟︎", "♟︎", "♟︎", "♟︎", "♟︎"],
    ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
  ];

  const tileColor = (rowIndex, colIndex) => {
    return (rowIndex + colIndex) % 2 !== 0 ? "bg-green-700" : "bg-yellow-100";
  };

  return (
    <div className="flex justify-center items-center mb-20">
      <div className="border-4 border-solid border-black rounded-md p-10 bg-amber-200">
        <div className="border-4 border-black">
          {initialBoardState.map((row, rowIndex) => (
            <div key={rowIndex} className="flex">
              {row.map((tile, colIndex) => (
                <div
                  key={tile}
                  className={`relative h-10 md:h-20 w-10 md:w-20 select-none ${tileColor(
                    rowIndex,
                    colIndex
                  )}`}
                ></div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Board;

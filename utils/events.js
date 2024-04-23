//sets start tile for initial click
const boardMouseDown = (e, setStartTile, tile) => {
  setStartTile(tile);
};

// stes the piece being moved
const boardDragStart = (e, setMovingPiece, tile) => {
  setMovingPiece(tile.piece);
};

const boardDrag = () => {};

// prevents dfefault
const boardDragOver = (e) => {
  e.preventDefault();
};

// sets endtile and runs piece movements
const boardDrop = (e, setEndTile, tile) => {
  setEndTile(tile);
};

module.exports = {
  boardMouseDown,
  boardDragStart,
  boardDrag,
  boardDragOver,
  boardDrop,
};

const piecePlacement = "absolute flex items-center justify-center";

const boardContainer = "flex justify-center items center mb-20";

const boardPadding =
  "border-4 border-solid border-black rounded-md p-10 bg-amber-200";

const boardBorder = "border-4 border-solid border-black";

const row = "flex";

const lightTile = "relative md:h-20 md:w-20 bg-yellow-100 select-none";
const darkTile = "relative md:h-20 md:w-20 bg-green-700 select-none";

const rowText = {
  lightTileText: "absolute right-1 bottom-0 text-green-700 select-none",
  darkTileText: "absolute right-1 bottom-0 text-yellow-100 select-none",
};

const columnText = {
  lightTileText: "absolute left-1 top-0 text-green-700 select-none",
  darkTileText: "absolute left-1 top-0 text-yellow-100 select-none",
};

const pieceStyle = {
  position: "absolute",
  inset: "inset-0",
  display: "flex",
  alignItems: "items-center",
  justifyItems: "justify-center",
  width: "w-fit",
  select: "select-none",
  cursor: "cursor-grabbing",
};

module.exports = {
  piecePlacement,
  boardContainer,
  boardPadding,
  boardBorder,
  row,
  lightTile,
  darkTile,
  rowText,
  columnText,
};

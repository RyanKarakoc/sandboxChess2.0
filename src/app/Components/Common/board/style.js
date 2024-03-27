const tileColor = require("./tileColour");
const styleString = require("../../../../../utils/styleString");

const piecePlacementStyle = {
  position: "absolute",
  top: "0",
  left: "0",
  width: "full",
  height: "full",
  display: "flex",
  alignItems: "items-center",
  justifyItems: "justify-center",
};

const boardContainerStyle = {
  display: "flex",
  justifyItems: "justify-center",
  alignItems: "items-center",
  marginBottom: "mb-20",
};

const boardPaddingStyle = {
  border: "border-4",
  borderStyle: "border-solid",
  borderColour: "border-black",
  layout: "rounded-md",
  padding: "p-10",
  background: "bg-amber-200",
};

const boardBorderStyle = {
  border: "border-4",
  borderStyle: "border-solid",
  borderColour: "border-black",
};

const rowStyle = {
  display: "flex",
};

const tileStyle = {
  position: "relative",
  height: "md:h-20",
  width: "md:w-20",
  select: "select-none",
};

const piecePlacement = () => {
  return styleString(piecePlacementStyle);
};

const boardContainer = () => {
  return styleString(boardContainerStyle);
};

const boardPadding = () => {
  return styleString(boardPaddingStyle);
};

const boardBorder = () => {
  return styleString(boardBorderStyle);
};

const row = () => {
  return styleString(rowStyle);
};

const tile = (rowIndex, colIndex) => {
  return styleString(tileStyle) + tileColor(rowIndex, colIndex);
};

module.exports = {
  piecePlacement,
  boardContainer,
  boardPadding,
  boardBorder,
  row,
  tile,
};

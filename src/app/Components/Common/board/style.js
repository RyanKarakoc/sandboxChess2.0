const tileColor = require("./tileColour");
const textColour = require("./textColour");
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

const piecePlacement = () => {
  return styleString(piecePlacementStyle);
};

const boardContainerStyle = {
  display: "flex",
  justifyItems: "justify-center",
  alignItems: "items-center",
  marginBottom: "mb-20",
};

const boardContainer = () => {
  return styleString(boardContainerStyle);
};

const boardPaddingStyle = {
  border: "border-4",
  borderStyle: "border-solid",
  borderColour: "border-black",
  layout: "rounded-md",
  padding: "p-10",
  background: "bg-amber-200",
};

const boardPadding = () => {
  return styleString(boardPaddingStyle);
};

const boardBorderStyle = {
  border: "border-4",
  borderStyle: "border-solid",
  borderColour: "border-black",
};

const boardBorder = () => {
  return styleString(boardBorderStyle);
};

const rowStyle = {
  display: "flex",
};

const row = () => {
  return styleString(rowStyle);
};

const tileStyle = {
  position: "relative",
  height: "md:h-20",
  width: "md:w-20",
  select: "select-none",
};

const tile = (rowIndex, colIndex) => {
  return styleString(tileStyle) + tileColor(rowIndex, colIndex);
};

const rowTextStyle = {
  position: "absolute",
  right: "right-1",
  bottom: "bottom-0",
  select: "select-none",
};

const rowText = (rowIndex, colIndex) => {
  return styleString(rowTextStyle) + textColour(rowIndex, colIndex);
};

const columnTextStyle = {
  position: "absolute",
  top: "top-0",
  left: "left-1",
  select: "select-none",
};

const columnText = (rowIndex, colIndex) => {
  return styleString(columnTextStyle) + textColour(rowIndex, colIndex);
};

module.exports = {
  piecePlacement,
  boardContainer,
  boardPadding,
  boardBorder,
  row,
  tile,
  rowText,
  columnText,
};

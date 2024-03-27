const tileColor = (rowIndex, colIndex) => {
  return (rowIndex + colIndex) % 2 !== 0 ? "bg-green-700" : "bg-yellow-100";
};

module.exports = tileColor;

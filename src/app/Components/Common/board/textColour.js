const textColour = (rowIndex, colIndex) => {
  return (rowIndex + colIndex) % 2 === 0 ? "text-green-700" : "text-yellow-100";
};

module.exports = textColour;

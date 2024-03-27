const styleString = (styleObject) => {
  let string = "";
  for (const key in styleObject) {
    string += `${styleObject[key]} `;
  }
  return string;
};

module.exports = styleString;

const styleString = require("../../../../../utils/styleString");

const headerStyle = {
  display: "flex",
  flexDirection: "flex-col",
  alignItems: "items-center",
  marginTop: "mt-10",
  marginBot: "mb-20",
};

const header = () => {
  return styleString(headerStyle);
};

module.exports = { header };

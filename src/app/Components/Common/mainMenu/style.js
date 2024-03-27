const styleString = require("../../../../../utils/styleString");

const navContainerStyle = {
  display: "flex",
  flexDirection: "flex-col",
  alignItems: "items-center",
};

const buttonStyle = {
  layout: "py-2 px-4 w-80 my-5 rounded-full",
  background: "bg-white",
  shadow: "shadow-lg",
  text: "text-black",
  hover: "hover:bg-green-400",
  active: "active:scale-y-75",
  transition: "transition-transform",
};

const navContainer = () => {
  return styleString(navContainerStyle);
};

const buttons = () => {
  return styleString(buttonStyle);
};

module.exports = { navContainer, buttons };

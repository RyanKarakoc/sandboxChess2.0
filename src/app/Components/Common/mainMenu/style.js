const navStyle = {
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
  let string = "";
  for (const key in navStyle) {
    string += `${navStyle[key]} `;
  }
  return string;
};

const buttons = () => {
  let string = "";
  for (const key in buttonStyle) {
    string += `${buttonStyle[key]} `;
  }
  return string;
};

module.exports = { navContainer, buttons };

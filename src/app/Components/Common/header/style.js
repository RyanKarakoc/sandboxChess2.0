const headerStyle = {
  display: "flex",
  flexDirection: "flex-col",
  alignItems: "items-center",
  marginTop: "mt-10",
  marginBot: "mb-20",
};

const header = () => {
  let string = "";
  for (const key in headerStyle) {
    string += `${headerStyle[key]} `;
  }
  return string;
};

module.exports = { header };

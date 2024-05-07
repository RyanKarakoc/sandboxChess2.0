const moveListContainer = "flex justify-center items-center mb-2";

const moveList =
  "border-4 border-solid border-black rounded-md p-4 bg-amber-200 w-72 h-96 overflow-y-auto relative";

const movesHeader =
  "flex justify-center border-4 border-black rounded-md p-2 bg-amber-100 mb-1 sticky";

const movesContainer =
  "flex justify-center border-4 border-black rounded-md p-2 bg-amber-100 mb-1";

const moves = {
  whiteMove:
    "flex justify-center border-4 border-black rounded-md p-1 mx-1 bg-white",
  blackMove:
    "flex justify-center border-4 border-black rounded-md p-1 mx-1 bg-neutral-400",
};

module.exports = {
  moveListContainer,
  moveList,
  movesHeader,
  movesContainer,
  moves,
};

const loadMoveSound = () => {
  return require("../../public/sounds/move.mp3");
};

const loadCaptureSound = () => {
  return require("../../public/sounds/capture.mp3");
};

const loadCastleSound = () => {
  return require("../../public/sounds/castle.mp3");
};

const loadCheckSound = () => {
  return require("../../public/sounds/check.mp3");
};

module.exports = {
  loadMoveSound,
  loadCaptureSound,
  loadCastleSound,
  loadCheckSound,
};

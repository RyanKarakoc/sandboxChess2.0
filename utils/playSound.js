const {
  loadMoveSound,
  loadCastleSound,
  loadCaptureSound,
  loadCheckSound,
} = require("./sounds/audioLoader");

const playSound = () => {
  const moveSound = loadMoveSound();
  const captureSound = loadCaptureSound();
  const castleSound = loadCastleSound();
  const checkSound = loadCheckSound();
  
  let audio = new Audio(moveSound);

  audio.play();
  return;
};

module.exports = { playSound };

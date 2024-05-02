const { hasPieceCaptured } = require("./pieces/hasPieceCaptured");
const {
  loadMoveSound,
  loadCastleSound,
  loadCaptureSound,
  loadCheckSound,
} = require("./sounds/audioLoader");

const playSound = (endTile, currentBoardState, colourToMove) => {
  const moveSound = loadMoveSound();
  const captureSound = loadCaptureSound();
  const castleSound = loadCastleSound();
  const checkSound = loadCheckSound();

  let audio = new Audio(moveSound);

  // change the audio to capture sound
  if (hasPieceCaptured(endTile, currentBoardState, colourToMove)) {
    audio = new Audio(captureSound);
  }

  audio.play();
  return;
};

module.exports = { playSound };

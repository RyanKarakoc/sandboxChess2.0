const { hasPieceCaptured } = require("./pieces/hasPieceCaptured");
const {
  loadMoveSound,
  loadCastleSound,
  loadCaptureSound,
  loadCheckSound,
} = require("./sounds/audioLoader");

const playSound = (
  startTile,
  endTile,
  currentBoardState,
  colourToMove,
  previousMove
) => {
  const moveSound = loadMoveSound();
  const captureSound = loadCaptureSound();
  const castleSound = loadCastleSound();
  const checkSound = loadCheckSound();

  let audio = new Audio(moveSound);

  // change the audio to capture sound
  if (
    hasPieceCaptured(
      startTile,
      endTile,
      currentBoardState,
      colourToMove,
      previousMove
    )
  ) {
    audio = new Audio(captureSound);
  }

  audio.play();
  return;
};

module.exports = { playSound };

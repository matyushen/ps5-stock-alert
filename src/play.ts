const sound = require("sound-play");

export const playSiren = async () => {
  let count = 1;
  await sound.play("src/assets/siren.wav");
  count += 1;
  if (count < 10) await playSiren();
};

const sin = (x) => Math.sin(x);

// xxx: なぜワンクッションおく？
const frac = (x) => x - Math.floor(x);
const fract = (x) => frac(x);

const PI = Math.PI;
const TAU = PI * 2.0;

/* --- main code --- */

const BPM = 60.0;

function timeToBeat(t) {
  return (t / 60.0) * BPM;
}

function mainSound(x, t) {
  const time = x + t;
  const bpm = timeToBeat(time);

  //return (sin(440.0 * (x + t) * PI * 2.0));
  //return (t);
  //return (Math.sin(440.0 * (x + t) * Math.PI) * 2.0);
  //return (Math.sin((x + t + .5) * Math.PI) * 2.0);
  return sin(440.0 * time * TAU) * fract(-bpm);
}

export { mainSound };

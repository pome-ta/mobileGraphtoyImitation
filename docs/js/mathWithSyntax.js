const sin = x => Math.sin(x);
const PI = Math.PI;

function anonymous(x, t) {
  //return (sin(440.0 * (x + t) * PI * 2.0));
  //return (t);
  //return (Math.sin(440.0 * (x + t) * Math.PI) * 2.0);
  //return (Math.sin((x + t + .5) * Math.PI) * 2.0);
  return (sin(440.0 * (x + t) * PI * 2.0));
}




export {anonymous};

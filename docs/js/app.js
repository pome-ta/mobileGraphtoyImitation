'use strict';

function Grapher() {
  const mCanvas = document.querySelector('#mainCanvas');
  const mContext = mCanvas.getContext('2d');
  
  let mycolor = '#202020';
  
  let mCx = 0.0;
  let mCy = 0.0;
  let mRa = 12.0;
  //let mRa 4.4;
  let mTimeS = 0.0;
  let mXres = 0;
  let mYres = 0;
  iAdjustCanvas();
  
  function iAdjustCanvas() {
    const devicePixelRatio = window.devicePixelRatio || 1;
    const w = mCanvas.offsetWidth * devicePixelRatio;
    const h = mCanvas.offsetHeight * devicePixelRatio;
    console.log(w);
    console.log(h);
    mCanvas.width = w;
    mCanvas.height = h;
    mXres = w;
    mYres = h;
  }
  
  function iDrawGraph() {
    mContext.strokeStyle = mycolor;
    mContext.lineWidth = 3.0;//(mTheme === 0) ? 2.0 : 3.0;
    mContext.fillStyle = mycolor;
      
    let success = true;
      
    const rx = mRa;
    const ry = mRa * mYres / mXres;
    const t = mTimeS;
    mContext.beginPath();
    mContext.stroke();
    return success;
  }
    
}
console.log('out');

document.addEventListener('DOMContentLoaded', Grapher);

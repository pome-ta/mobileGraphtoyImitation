'use strict';

function Grapher() {
  const mCanvas = document.querySelector('#mainCanvas');
  const mContext = mCanvas.getContext('2d');
  
  let mycolor = '#202020';
  
  let mCx = 0.0;
  let mRa = 12.0;
  let mTimeS = 0.0;
  let mXres = 0;
  let mYres = 0;
  
    function iDrawGraph(mycolor) {
      mContext.strokeStyle = mycolor;
      mContext.lineWidth = 3.0;//(mTheme === 0) ? 2.0 : 3.0;
      mContext.fillStyle = mycolor;
      let oldBadNum = true;
      let success = true;
      const rx = mRa;
      const ry = mRa * mYres / mXres;
      const t = mTimeS;
      mContext.beginPath();
      
      let oldy = 0.0;
      for (let i = 0; i < mXres; i++) {
        const x = mCx + rx * (-1.0 + 2.0 * i / mXres);
        let y = 0.0;
        try {
          y = formula(x, t);
        } catch (err) {
          success = false;
          break;
        }
      mContext.stroke();
      return success;
    }
}

document.addEventListener('DOMContentLoaded', Grapher);

'use strict';

function Grapher() {
  const mCanvas = document.querySelector('#mainCanvas');
  const mContext = mCanvas.getContext('2d');
  const devicePixelRatio = window.devicePixelRatio || 1;
  
  
  let mCx = 0.0;
  let mCy = 0.0;
  let mRa = 12.0;  //12.0
  
  //let mRa 4.4;
  let mTimeS = 0.0;
  let mXres = 0;
  let mYres = 0;
  init();
  
  
  function init() {
    iAdjustCanvas();
    iDraw();
    iDrawGraph();
  }
  
  function anonymous(x, t) {
    //return (sin(440.0 * (x + t) * PI * 2.0));
    return (Math.sin(4.0 * (x + t) * Math.PI));
  }

  
  function iDrawGraph() {
    const mycolor = 'maroon';
    mContext.strokeStyle = mycolor;
    mContext.lineWidth = 3.0;//(mTheme === 0) ? 2.0 : 3.0;
    mContext.fillStyle = mycolor;
    
    let oldBadNum = true;
    
    const rx = mRa;
    const ry = mRa * mYres / mXres;
    const t = mTimeS;
    
    mContext.beginPath();
    let oldy = 0.0;
    for (let i = 0; i < mXres; i++) {
      const x = mCx + rx * (-1.0 + 2.0 * i / mXres);
      const y = anonymous(x, t);
      let badNum = isNaN(y) || (y == Number.NEGATIVE_INFINITY) || (y === Number.POSITIVE_INFINITY) || (Math.abs(y) > 1e9);
      if (!badNum) {
        let j = mYres * (0.5 + 0.5 * (mCy - y) / ry);
        if (oldBadNum) {
          mContext.moveTo(i, j);
        } else {
          mContext.lineTo(i, j);
        }
      }
      oldBadNum = badNum;
      oldy = y;
    }
    mContext.stroke();
    
    console.log('/iDrawGraph');
  }
  
  function iAdjustCanvas() {
    const w = mCanvas.offsetWidth * devicePixelRatio;
    const h = mCanvas.offsetHeight * devicePixelRatio;
    mCanvas.width = w;
    mCanvas.height = h;
    mXres = w;
    mYres = h;
  }
  
  
  /**
   * canvas に描画
  */
  function iDraw() {
    const rx = mRa;
    const ry = mRa * mYres / mXres;
    const minx = mCx - rx;
    const maxx = mCx + rx;
    const miny = mCy - ry;
    const maxy = mCy + ry;
    
    // axes
    const ctx = mContext;
    // todo: matrix 設定
    // xxx: どう変わるのかあとで確認
    ctx.setTransform(1.0, 0.0, 0.0, 1, 0, 0.5, 0.5);
    ctx.fillStyle = 'gray';  // theme.mBackground;
    ctx.fillRect(0, 0, mXres, mYres);
    
    const fontSize = 10 * devicePixelRatio;
    ctx.lineWidth = 1.0;
    ctx.font = fontSize.toFixed(0) + 'px monospace';
    
    //const sep = (mShowAxes === 1) ? 5.0 : 4.0;
    const sep = 4.0;  // todo: mShowAxes = 2;
    let n = -1 + Math.floor(Math.log(mXres / (rx * 2.0)) / Math.log(sep));  // xxx: 1(整数)
    if (n < 0) {
      n = 0;
    } else if (n > 100) {
      n = 100;
    }
    
    /**
     * grid 描画
     * @param {number} off 数値表示と、荒さ
     * @param {string} color 線を引く色
    */
    function drawGrid(off, color) {
      ctx.strokeStyle = color;
      let ste = Math.pow(sep, off + Math.floor(Math.log(rx) / Math.log(sep)));
      console.log(ste);
      const iax = Math.floor(minx / ste);
      const ibx = Math.floor(maxx / ste);
      const iay = Math.floor(miny / ste);
      const iby = Math.floor(maxy / ste);
      
      ctx.beginPath();
      for (let i = iax; i <= ibx; i++) {
        let x = i * ste;
        let ix = mXres * (0.5 + (x - mCx) / (2.0 * rx));
        ctx.moveTo(ix, mYres);
        ctx.lineTo(ix, 0);
      }
      for (let i = iay; i <= iby; i++) {
        let y = i * ste;
        let iy = mYres * (0.5 - (y - mCy) / (2.0 * ry));
        ctx.moveTo(mXres, iy);
        ctx.lineTo(0, iy);
      }
      ctx.stroke();
      
      // todo: text label
      if (off === 0) {
        ctx.fillStyle = 'fuchsia';  // theme.mText;
        for (let i = iax; i <= ibx; i++) {
          let x = i * ste;
          let ix = mXres * (0.5 + (x - mCx) / (2.0 * rx));
          ctx.fillText(x.toFixed(n), ix + 4, mYres - 2);
        }
        for (let i = iay; i <= iby; i++) {
          let y = i * ste;
          let iy = mYres * (0.5 - (y - mCy) / (2.0 * ry));
          ctx.fillText(y.toFixed(n), 2, iy + 10);
        }
      }
      console.log('/drawGrid');
    }
    drawGrid(-1, 'lime');  // thin grid  薄いグリッド
    drawGrid(0, 'aqua');  // coarse grid  粗いグリッド
    
    
    // axis 中線？
    // xxx: なぜ`{` で囲むのか？
    {
      const xPos = mXres * (0.5 - mCx / (2.0 * rx));
      const yPos = mYres * (0.5 + mCy / (2.0 * ry));
      ctx.strokeStyle = 'yellow';//theme.mGrid;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(xPos, 0); ctx.lineTo(xPos, mYres);
      ctx.moveTo(0, yPos); ctx.lineTo(mXres, yPos);
      ctx.stroke();
    }
    
    
    console.log('/iDraw');
  }
    
}
console.log('out');

document.addEventListener('DOMContentLoaded', Grapher);

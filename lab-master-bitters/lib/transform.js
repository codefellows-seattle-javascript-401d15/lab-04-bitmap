'use strict';

module.exports = exports = {};

exports.invert = function(bmp){
  // console.log(bitHeader.bmp.colorArray);
  for (let i =0; i < (bmp.colorArray.length)*4; i += 4){
    for (let j =0; j < 3; j++){
      bmp.colorArray[i+j] = 255 - bmp.colorArray[i+j];
    }
  }
  // console.log(bitHeaderbmp.colorArray);
};

exports.greyScale = function(bmp){
  for (let i=0; i < (bmp.colorArray.length)*4; i += 4){
    let avg = (bmp.colorArray[i] + bmp.colorArray[i+1] + bmp.colorArray[i+2])/3;
    bmp.colorArray[i] = avg;
    bmp.colorArray[i+1] = avg;
    bmp.colorArray[i+2] = avg;
  }
};

exports.scaleColor = function(bmp, colorNum, num){
  if (colorNum > 2) throw Error;
  for (let i = 0; i < (bmp.colorArray.length)*4; i += 4){
    if (num + bmp.colorArray[i+colorNum] < 256){
      bmp.colorArray[i+colorNum] = num + bmp.colorArray[i+colorNum];
    }
  }
};

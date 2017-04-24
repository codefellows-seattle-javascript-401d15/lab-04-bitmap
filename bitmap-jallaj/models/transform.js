'use strict';

const bitmapModule = require(`${__dirname}/../lib/readBitmap.js`);
const writeBitmap = require(`${__dirname}/../lib/writeBitmap.js`);
const fs = require('fs');

module.exports = exports = {};

exports.inversion = function(bitmap) {
  let bufferColorArray = bitmap.colorArray;
  for(var i = 0; i < bufferColorArray.length; i += 4) {
    bufferColorArray[i] = 255 - bufferColorArray[i];
    bufferColorArray[i+1] = 255 - bufferColorArray[i+1];
    bufferColorArray[i+2] = 255 - bufferColorArray[i+2];
    // console.log(bufferColorArray, '@@@');
  }
};

exports.grayscale = function(bitmap) {
  let bufferColorArray = bitmap.colorArray;

  for(var ii = 0; ii < bufferColorArray.length; ii += 4){
    let avg = (bufferColorArray[ii] + bufferColorArray[ii+1] + bufferColorArray[ii+2]) / 3;
    bufferColorArray[ii] = avg;
    bufferColorArray[ii+1] = avg;
    bufferColorArray[ii+2] = avg;
  }
};

exports.scale = function(bitmap) {
  let bufferColorArray = bitmap.colorArray;
  
  for(var index = 0; index < bufferColorArray.length; index += 4) {
    let double = bufferColorArray[index] * 2;
    if (double < 255) {
      bufferColorArray[index] = double;
    } else {
      bufferColorArray[index] = 255;
    }
  }
};


// module.exports = function() {
// 
//   bitmapModule.inversion(function(exports){
//     let bufferColorArray = exports.colorArray;
// 
//     for(var i = 0; i < bufferColorArray.length; i += 4) {
//       bufferColorArray[i] = 255 - bufferColorArray[i];
//       bufferColorArray[i+1] = 255 - bufferColorArray[i+1];
//       bufferColorArray[i+2] = 255 - bufferColorArray[i+2];
//     }
//   });
//   
//   bitmapModule.grayscale(function(exports){
//     let bufferColorArray = exports.colorArray;
// 
//     for(var ii = 0; ii < bufferColorArray.length; ii += 4){
//       let avg = (bufferColorArray[ii] + bufferColorArray[ii+1] + bufferColorArray[ii+2]) / 3;
//       bufferColorArray[ii] = avg;
//       bufferColorArray[ii+1] = avg;
//       bufferColorArray[ii+2] = avg;
//     }
//   });
//   
//   console.log(exports);
//     
//   bitmapModule.writeFile(function(exports) {
//     fs.writeFile(`${__dirname}/assets/house-new.bmp`, exports.buffer, function(err){
//       if (err) throw err;
//       console.log('Picture successfully made.');
//     });
// 
//   });
// 
// };
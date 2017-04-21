'use strict';

const bitmapModule = require(`${__dirname}/lib/bitmap.js`);

bitmapModule.bitmap(function(exports){
  let bufferColorArray = [];

  bufferColorArray.push(exports.colorArray);
  // console.log(exports, 'exports');
  // console.log(exports.colorArray);
  console.log(bufferColorArray);
});

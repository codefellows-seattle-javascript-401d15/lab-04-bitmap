'use strict';

const fs = require('fs');
const bitmapModule = require(`${__dirname}/lib/readBitmap.js`);
const writeBitmap = require(`${__dirname}/lib/writeBitmap.js`);

bitmapModule.readBitmap(function(exports){
  let bufferColorArray = exports.colorArray;

  for(var i = 0; i < bufferColorArray.length; i += 4) {
    bufferColorArray[i] = 0;
    bufferColorArray[i+1] = 0;
    bufferColorArray[i+2] = 255;
  }

  console.log(exports);
  fs.writeFile(`${__dirname}/assets/house-new.bmp`, exports.buffer, function(err){
    if (err) throw err;
    console.log('Picture successfully made.');
  });

  // console.log(exports, 'exports');
  // console.dir(exports.colorArray);

  // console.log(bufferColorArray.toString('hex'));
  // console.log(bufferString);
  // console.dir(bufferColorArray.splice(0,4));
});

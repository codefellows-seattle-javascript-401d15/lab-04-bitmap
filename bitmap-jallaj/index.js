'use strict';

const fs = require('fs');
const bitmapModule = require(`${__dirname}/lib/readBitmap.js`);

bitmapModule.readBitmap(function(exports){
  let bufferColorArray = exports.colorArray;

  for(var i = 0; i < bufferColorArray.length; i += 4) {
    bufferColorArray[i] += 25;
    bufferColorArray[i+1] += 25;
    bufferColorArray[i+2] += 25;
    console.log(bufferColorArray[i]);
  }

  fs.writeFile(`${__dirname}/assets/bitmap-new.bmp`, bufferColorArray, function(err){
    if (err) throw err;
    console.log('Picture successfully made.');
  });

  // console.log(exports, 'exports');
  // console.dir(exports.colorArray);

  console.log(bufferColorArray);
  // console.log(bufferColorArray.toString('hex'));
  const bufferString = Buffer.from(bufferColorArray);
  // console.log(bufferString);
  // console.dir(bufferColorArray.splice(0,4));
});

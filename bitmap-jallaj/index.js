'use strict';

const bitmapModule = require(`${__dirname}/lib/bitmap.js`);

bitmapModule.bitmap(function(exports){
  let bufferColorArray = [];

  bufferColorArray.push(exports.colorArray);
  // console.log(exports, 'exports');
  // console.dir(exports.colorArray);

  // console.log(bufferColorArray);
  // console.log(bufferColorArray.toString('hex'));
  const bufferString = Buffer.from(bufferColorArray);
  // console.log(bufferString);
  // console.dir(bufferColorArray.splice(0,4));
});



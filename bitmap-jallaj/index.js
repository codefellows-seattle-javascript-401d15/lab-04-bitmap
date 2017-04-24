'use strict';

const fs = require('fs');
const Bitmap = require('./models/constructor.js');
const bitmapModule = require(`${__dirname}/lib/readBitmap.js`);
const transform = require(`${__dirname}/models/transform.js`);
const writeBitmap = require(`${__dirname}/lib/writeBitmap.js`);


bitmapModule.readBitmap(function(newBitmap) {
  transform.inversion(newBitmap);
  console.log(newBitmap);
  writeBitmap();
});


// writeBitmap(function(exports) {
//   fs.writeFile(`${__dirname}/assets/house-new.bmp`, exports.buffer, function(err){
//     if (err) throw err;
//     console.log('Picture successfully made.');
//   });
// 
// });
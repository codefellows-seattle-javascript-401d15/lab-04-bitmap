'use strict';

const fs = require('fs');
const bitmap = fs.readFileSync('./assets/bitmap.bmp'); //NOT SYNCH WE WANT ASYNCH
const headers = require('./bit-headers.js')


//function to invert colors
function invertColors(bitmap) {
  for (var i = 0; i < bitmap.colorArray.length; i += 4) {
    bitmap.colorArray[i] = 255 - bitmap.colorArray[i];
  }
  console.log(bitmap);
  return bitmap;
}


module.exports.invertColors = invertColors;


//function to greyscale colors




//function to RGB colors

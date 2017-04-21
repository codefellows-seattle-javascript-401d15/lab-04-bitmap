'use strict';

const fs = require('fs');
const bitmap = fs.readFileSync('./assets/bitmap.bmp'); //NOT SYNCH WE WANT ASYNCH
const headers = require('./bit-headers.js')

let colorArray = headers.bmpData.colorArray;

//function to invert colors
function invertColors(colorArray, start, end) {
  console.log(`colorArray: ${colorArray}`);
  for (var i = start; i < end; i+=4) {
    colorArray[i] = 255 - colorArray[i];
    console.log('here in for');
  }
  console.log('transform');
  return colorArray;
}

module.exports.invertColors = invertColors;


//function to greyscale colors




//function to RGB colors

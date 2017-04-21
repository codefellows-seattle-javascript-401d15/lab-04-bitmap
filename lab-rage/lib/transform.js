'use strict';

//function to invert colors
let invertColors = function (bitmap) {
  for (var i = 0; i < bitmap; i++) {
    bitmap[i] = 255 - bitmap[i];
    console.log(bitmap[i]);
  }
  return bitmap;
};



//function to greyscale colors




//function to RGB colors




//export functions
exports.invertColors = invertColors;

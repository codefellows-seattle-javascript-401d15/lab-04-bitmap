'use strict';

const fileHandler = require('./file-handler.js');

module.exports = exports = {};

module.exports = function(path, transform, bitmap) {
  exports[transform](bitmap, fileHandler.writeToFile);
};

// Read the desired rgba value-set from the bitmap file and create buffer (FIRST)
exports.invert = function(bitmap, callback){
  // var testArray = [];
  console.log(bitmap);
  for (var i = 0; i < bitmap.colorArray.length; i++) {
    let colorValue = bitmap.colorArray[i].toString(16);
    colorValue = (255 - colorValue);
    bitmap.colorArray.writeUIntLE(colorValue, i, 1);
  }
  // bitmap.paletteArray = testArray;
  console.log('paletteArray of inverted values in hex: ', bitmap.colorArray);
  // console.log( 'ARRRAAAAYYYY ', bitmap.paletteArray);
  callback('new', bitmap.originalBuffer);
};

// Pass in the buffer, convert format and manipulate values (call a filter method) (SECOND)

// Write the buffer containing the mutated data back into the bitmap file (FOURTH)

// Call fileHandler.writeToFile() to confirm successful bitmap transform (FIFTH)

// FILTER METHODS // (ONE OF THESE: THIRD)
// Invert colors
// Gray-scale
// change RGB individually

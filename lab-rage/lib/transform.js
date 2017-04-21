'use strict';

module.exports = exports = {};

//function to invert colors
let invertColors = function (bitmap) {
  for (var i = 0; i < bitmap; i++) {
    bitmap[i] = 255 - bitmap[i];
    console.log(bitmap[i]);
  }
  return bitmap;
};



//function to greyscale colors
exports.monoChrome = (buff, err) => {
  if(err) throw new Error('Failed to change image to black and white');
  let image = new exports.MonoChrome(buff);
  image.monoChrome(buff);
};

exports.MonoChrome = buff => {
  this.fileSize = buff.readUInt32LE(2);
  this.offset = buff.readUInt32LE(10);
  this.colorArray = buff.slice(54,1078);
};

exports.GrayScale.prototype.monoChrome = () => {
  
};



//function to RGB colors




//export functions
module.exports.invertColors = invertColors;

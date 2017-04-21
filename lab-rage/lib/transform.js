'use strict';

module.exports = exports = {};

// TODO: function to invert colors
// let invertColors = bitmap => {
//   for (var i = 0; i < bitmap; i++) {
//     bitmap[i] = 255 - bitmap[i];
//     console.log(bitmap[i]);
//   }
//   return bitmap;
// };



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

exports.MonoChrome.prototype.monoChrome = () => {
  let currentColor = [];
  for (var i = 0; i < 1024; i += 4) {
    currentColor = this.colorArray.slice(i, i + 4);
    let currentColorAverage = ((currentColor[0] + currentColor[1] + currentColor[2])/3);
    currentColor[0] = currentColorAverage;
    currentColor[1] = currentColorAverage;
    currentColor[2] = currentColorAverage;
    currentColor[3] = 0;
  }
};


// TODO: function to RGB colors




//export functions
module.exports.invertColors = invertColors;

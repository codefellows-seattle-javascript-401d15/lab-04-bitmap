'use strict';

module.exports = exports = {};

exports.inverter = function(imgObject){
  for(let i = 0; i < imgObject.colorArray.length; i++) {
    let newColors = 255 - imgObject.colorArray[i].toString(16);
    imgObject.colorArray.writeUIntLE(newColors, i, 1);
  }
};

exports.greyScale = function(imgObject) {
  for (let i = 0; i < imgObject.colorArray.length; i+=4) {
    let greyScale = imgObject.colorArray[i].toString(16);
    imgObject.colorArray.writeUIntLE(greyScale, i, 1);
    imgObject.colorArray.writeUIntLE(greyScale, i+1, 1);
    imgObject.colorArray.writeUIntLE(greyScale, i+2, 1);
  }
};

exports.rgbColor = function(imgObject) {
  for (let i = 0; i < imgObject.colorArray.length; i += 4) {
    let rgbColor = imgObject.colorArray[i].toString(16);
    imgObject.colorArray.writeUIntLE(rgbColor, i, 1);
  }
};

'use strict';

const fileHandler = require('./file-handler.js');

module.exports = exports = {};

module.exports = function(path, transform, bitmap) {
  exports[transform](bitmap, fileHandler.writeToFile);
};

exports.invert = function(bitmap, callback){
  console.log(bitmap);
  for (var i = 0; i < bitmap.colorArray.length; i++) {
    let colorValue = bitmap.colorArray[i].toString(16);
    colorValue = (255 - colorValue);
    bitmap.colorArray.writeUIntLE(colorValue, i, 1);
  }
  callback('inverted', bitmap.originalBuffer);
};

exports.grayScale = function(bitmap, callback){
  let palette = bitmap.colorArray;
  console.log(bitmap);
  for (var i = 0; i < bitmap.colorArray.length; i+=4) {
    let grayscale = (palette[i] + palette[i + 1] + palette[i + 2]) / 3;
    bitmap.colorArray.writeUIntLE(grayscale, i, 1);
    bitmap.colorArray.writeUIntLE(grayscale, i + 1, 1);
    bitmap.colorArray.writeUIntLE(grayscale, i + 2, 1);
  }
  callback('grayscaled', bitmap.originalBuffer);
};

exports.greenScale = function(bitmap, callback){
  console.log(bitmap);
  for (var i = 0; i < bitmap.colorArray.length; i+=4) {
    let greenscale = 255;
    bitmap.colorArray.writeUIntLE(greenscale, i + 1, 1);
  }
  callback('greenscaled', bitmap.originalBuffer);
};

exports.blueScale = function(bitmap, callback){
  console.log(bitmap);
  for (var i = 0; i < bitmap.colorArray.length; i+=4) {
    let bluescale = 255;
    bitmap.colorArray.writeUIntLE(bluescale, i, 1);
  }
  callback('bluescaled', bitmap.originalBuffer);
};

exports.redScale = function(bitmap, callback){
  console.log(bitmap);
  for (var i = 0; i < bitmap.colorArray.length; i+=4) {
    let redscale = 255;
    bitmap.colorArray.writeUIntLE(redscale, i + 2, 1);
  }
  callback('redscaled', bitmap.originalBuffer);
};

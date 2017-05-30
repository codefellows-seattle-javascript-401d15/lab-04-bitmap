'use strict';

const fileHandler = require('./file-handler.js');

module.exports = exports = {};

module.exports = function(path, transform, bitmap) {
  exports[transform](bitmap, fileHandler.writeToFile);
};

exports.invert = function(bitmap, callback){
  if(bitmap.colorTable === 0) {
    let y = 0;
    while(y <= bitmap.totalSize){
      let colorValue = bitmap.imageData[y];
      colorValue = 255 - colorValue;
      bitmap.imageData[y] = colorValue;
      y++;
    }
    return callback('inverted', bitmap.originalBuffer);
  }
  for (let i = 0; i < bitmap.colorArray.length; i++) {
    let colorValue = bitmap.colorArray[i].toString(16);
    colorValue = (255 - colorValue);
    bitmap.colorArray.writeUIntLE(colorValue, i, 1);
  }
  callback('inverted', bitmap.originalBuffer);
};

exports.grayScale = function(bitmap, callback){
  if(bitmap.colorTable === 0) {
    let i = 0;
    let width = bitmap.lineDataByteWidth;
    while(i < bitmap.totalSize){
      let grayscale = ( bitmap.imageData[i] + bitmap.imageData[i + 1] +  bitmap.imageData[i + 2]) / 3;
      bitmap.imageData[i] = grayscale;
      bitmap.imageData[i + 1] = grayscale;
      bitmap.imageData[i + 2] = grayscale;
      i += 3;
      if(i === width) {
        i += bitmap.padding;
        width += bitmap.fullLineWidth;
      }
    }
    return callback('grayscaled', bitmap.originalBuffer);
  }

  let palette = bitmap.colorArray;
  for (let i = 0; i < bitmap.colorArray.length; i+=4) {
    let grayscale = (palette[i] + palette[i + 1] + palette[i + 2]) / 3;
    palette[i] = grayscale;
    palette[i + 1] = grayscale;
    palette[i + 2] = grayscale;
  }
  callback('grayscaled', bitmap.originalBuffer);
};

exports.greenScale = function(bitmap, callback){
  let greenscale = 255;
  let width = bitmap.lineDataByteWidth;
  if(bitmap.colorTable === 0) {
    let i = 0;
    while(i < bitmap.totalSize){
      bitmap.imageData[i + 1] = greenscale;
      i+=3;
      if(i === width) {
        i += bitmap.padding;
        width += bitmap.fullLineWidth;
      }
    }
    return callback('greenscaled', bitmap.originalBuffer);
  }

  for (let i = 0; i < bitmap.colorArray.length; i+=4) {
    bitmap.colorArray.writeUIntLE(greenscale, i + 1, 1);
  }
  callback('greenscaled', bitmap.originalBuffer);
};

exports.blueScale = function(bitmap, callback){
  let bluescale = 255;
  let width = bitmap.lineDataByteWidth;
  if(bitmap.colorTable === 0) {
    let i = 0;
    while(i < bitmap.totalSize){
      bitmap.imageData[i] = bluescale;
      i+=3;
      if(i === width) {
        i += bitmap.padding;
        width += bitmap.fullLineWidth;
      }
    }
    return callback('bluescaled', bitmap.originalBuffer);
  }
  for (let i = 0; i < bitmap.colorArray.length; i+=4) {
    bitmap.colorArray.writeUIntLE(bluescale, i, 1);
  }
  callback('bluescaled', bitmap.originalBuffer);
};

exports.redScale = function(bitmap, callback){
  let redscale = 255;
  let width = bitmap.lineDataByteWidth;
  if(bitmap.colorTable === 0) {
    let i = 0;
    while(i < bitmap.totalSize){
      bitmap.imageData[i + 2] = redscale;
      i+=3;
      if(i === width) {
        i += bitmap.padding;
        width += bitmap.fullLineWidth;
      }
    }
    return callback('redscaled', bitmap.originalBuffer);
  }
  if(bitmap.colorTable === 0) {
    let i = 0;
    while(i < bitmap.totalSize){
      bitmap.imageData[i + 2] = redscale;
      i++;
    }
    return callback('redscaled', bitmap.originalBuffer);
  }
  for (let i = 0; i < bitmap.colorArray.length; i+=4) {
    bitmap.colorArray.writeUIntLE(redscale, i + 2, 1);
  }
  callback('redscaled', bitmap.originalBuffer);
};

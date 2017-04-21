'use strict';

// Require in the transformer module here when ready //
const transformer = require('./transform.js');

module.exports = exports = {};

const Bitmap = function(buffer) {
  console.log(buffer);
  this.spec = buffer.toString('utf-8', 0, 2);
  this.size = buffer.readUInt32LE(2); // int
  // this.width = buffer.readUInt32LE(18); // int
  // this.height = buffer.readUInt32LE(20); // int
  this.offset = buffer.readUInt32LE(10); // int
  this.colorArray = buffer.slice(54, this.offset); // buffer array-like object
  // this.colorPalette = buffer.readUInt32LE(46) / 4;
  // this.paletteArray = [];
  this.originalBuffer = buffer;
};

module.exports = function(buffer, path, transform) {
  var bitmap = new Bitmap(buffer);
  // for (var i = 0; i < bitmap.colorArray.length; i++) {
  //
  //   bitmap.paletteArray.push(bitmap.colorArray[i]);
  // }
  transformer(path, transform, bitmap);
};

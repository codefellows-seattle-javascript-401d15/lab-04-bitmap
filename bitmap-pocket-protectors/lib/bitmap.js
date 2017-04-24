'use strict';

// Require in the transformer module here when ready //
const transformer = require('./transform.js');

module.exports = exports = {};

const Bitmap = function(buffer) {
  console.log(buffer);
  this.spec = buffer.toString('utf-8', 0, 2);
  this.size = buffer.readUInt32LE(2); // int
  this.offset = buffer.readUInt32LE(10); // int
  this.colorArray = buffer.slice(54, this.offset); // buffer array-like object
  this.originalBuffer = buffer;
};

module.exports = function(buffer, path, transform) {
  var bitmap = new Bitmap(buffer);
  transformer(path, transform, bitmap);
};

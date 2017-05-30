'use strict';

const transformer = require('./transform.js');

module.exports = exports = {};

const Bitmap = function(buffer) {
  this.spec = buffer.toString('utf-8', 0, 2);
  this.size = buffer.readUInt32LE(2);
  this.rawSize = buffer.readUInt32LE(34);
  this.width = buffer.readUInt32LE(18);
  this.height = buffer.readUInt32LE(22);
  this.offset = buffer.readUInt32LE(10);
  this.bitsPerPixel = buffer.readUInt32LE(28);
  this.bytesPerPixel = this.bitsPerPixel/8;
  this.colorTable = buffer.readUInt32LE(46);
  if(this.offset === 54){
    this.imageData = buffer.slice(54, this.size);
    this.lineDataByteWidth = this.width*this.bytesPerPixel;
    let foo = this.lineDataByteWidth % 4;
    this.padding = 0;
    if(foo !== 0) this.padding = 4 - foo;
    this.fullLineWidth = this.lineDataByteWidth + this.padding;
    this.totalSize = this.fullLineWidth * this.height;
  }
  this.colorArray = buffer.slice(54, this.offset);
  this.originalBuffer = buffer;
};

module.exports = function(buffer, path, transform) {
  let bitmap = new Bitmap(buffer);
  console.log(bitmap);
  transformer(path, transform, bitmap);
};

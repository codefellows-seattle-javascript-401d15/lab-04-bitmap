'use strict';

const fs = require('fs');

module.exports = function(bmpImage) {
  this.bmpImage = bmpImage;
  this.spec = bmpImage.toString('utf-8', 0, 2);
  this.size = bmpImage.readUInt32LE(2);
  this.offset = bmpImage.readUInt32LE(10);
  this.width = bmpImage.readUInt32LE(18);
  this.height = bmpImage.readUInt32LE(22);
  this.colorArray = bmpImage.slice(54, this.offset);
  console.log(this);
};

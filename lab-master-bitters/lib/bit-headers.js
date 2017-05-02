'use strict';

module.exports = exports = {};

exports.bmp = function(data){
  this.spec = data.toString('utf-8',0,2);
  this.size = data.readUInt32LE(2);
  this.offset = data.readUInt32LE(10);
  this.width = data.readUInt32LE(18);
  this.height = data.readUInt32LE(22);

  this.colorArray = data.slice(54, this.offset);
};

// let bitmapArray = [];

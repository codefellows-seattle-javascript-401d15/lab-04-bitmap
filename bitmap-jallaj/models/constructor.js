'use strict';

module.exports = function(data){
  this.spec = data.toString('utf-8', 0, 2);
  this.size = data.readUInt32LE(2);
  this.width = data.readUInt32LE(18);
  this.height = data.readUInt32LE(22);
  this.headersize = data.readUInt32LE(14);
  this.offset = data.readUInt32LE(10);
  this.colorArray = data.slice(54, exports.offset);
  this.buffer = data;
};

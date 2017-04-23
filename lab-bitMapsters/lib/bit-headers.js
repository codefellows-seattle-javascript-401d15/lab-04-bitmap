'use strict';

module.exports = exports = {};

exports.Bmp = function(data, name){
  this.name = name;
  this.spec = data.toString('utf-8', 0, 2);
  this.size = data.readUInt32LE(2);
  this.width = data.readUInt32LE(18);
  this.height = data.readUInt32LE(22);
  this.offset = data.readUInt32LE(10);
  this.colorArray = data.slice(54, this.offset);
  this.filePath = `${__dirname}/../assets/${this.name}.bmp`;
  this.buff = data;
};

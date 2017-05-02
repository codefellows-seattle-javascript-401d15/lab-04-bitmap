'use strict';

module.exports = exports = {};

const fs = require('fs');
const bitmap = fs.readFile(`${__dirname}/../assets/bmp-files/bitmap.bmp`);
const bmp = function(){
  this.spec = bitmap.toString('utf-8',0,2);
  this.size = bitmap.readUInt32LE(2);
  this.width = bitmap.readUInt32LE(18);
  this.height = bitmap.readUInt32LE(22);
  this.offset = bitmap.slice(54, bmp.offset);
};
console.log(bmp);

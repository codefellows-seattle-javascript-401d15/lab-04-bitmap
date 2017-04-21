'use strict';

const fs = require('fs');
const bmpData = {};

function getHeaderData () {
  bmpData.spec = bitmap.toString('utf-8', 0, 2);
  bmpData.size = bitmap.readUInt32LE(2);
  bmpData.offset = bitmap.readUInt32LE(10);
  bmpData.width = bitmap.readUInt32LE(18);
  bmpData.height = bitmap.readUInt32LE(22);
  bmpData.colorArray = bitmap.slice(54, bmpData.offset);
  console.log(bmpData);

module.exports = function(bmpImage) {
  this.bmpImage = bmpImage;
  this.spec = bmpImage.toString('utf-8', 0, 2);
  this.size = bmpImage.readUInt32LE(2);
  this.offset = bmpImage.readUInt32LE(10);
  this.width = bmpImage.readUInt32LE(18);
  this.height = bmpImage.readUInt32LE(22);
  this.colorArray = bmpImage.slice(54, this.offset);
}

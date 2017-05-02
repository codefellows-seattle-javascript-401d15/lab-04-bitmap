'use strict';

const fs = require('fs');
const bitmap = fs.readFileSync('../assets/bitmap.bmp'); //NOT SYNCH WE WANT ASYNCH

const bmpData = {};

function getHeaderData () {
  bmpData.spec = bitmap.toString('utf-8', 0, 2);
  bmpData.size = bitmap.readUInt32LE(2);
  bmpData.offset = bitmap.readUInt32LE(10);
  bmpData.width = bitmap.readUInt32LE(18);
  bmpData.height = bitmap.readUInt32LE(22);
  bmpData.colorArray = bitmap.slice(54, bmpData.offset);
  console.log(bmpData);
}

module.exports.getHeaderData = getHeaderData;

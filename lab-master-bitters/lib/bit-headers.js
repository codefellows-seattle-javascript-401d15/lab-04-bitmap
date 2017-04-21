'use strict';

module.exports = exports = {};

const fs = require('fs');
const bitmap = fs.readFile(`${__dirname}/../assets/bmp-files/bitmap.bmp`);
const bmp = {};

bmp.spec = bitmap.toString('utf-8',0,2);
bmp.size = bitmap.readUInt32LE(2);
bmp.width = bitmap.readUInt32LE(18);
bmp.height = bitmap.readUInt32LE(22);
bmp.offset = bitmap.slice(54, bmp.offset);

console.log(bmp);

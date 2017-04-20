'use strict';

const fs = require('fs');
const bitmap = fs.readFile(`${__dirname}../assets/bitmap.bmp`);
module.exports = exports = {};

exports.spec = bitmap.toString('utf-8', 0, 2);

exports.size = bitmap.readUInt32LE(2);
exports.width = bitmap.readUInt32LE(18);
exports.height = bitmap.readUInt32LE(22);
exports.headersize = bitmap.readUInt32LE(14);
exports.offset = bitmap.readUInt32LE(10);
exports.colorArray = bitmap.slice(54, exports.offset);


console.log(exports);

'use strict';

const fs = require('fs');
const readBitmap = require('./readBitmap.js');
module.exports = exports = {};

const fileNames = [`${__dirname}/../assets/bitmap-new.bmp`, `${__dirname}/../assets/finger-print-new.bmp`, `${__dirname}/../assets/house-new.bmp`, `${__dirname}/../assets/non-palette-bitmap-new.bmp`];

exports.writeBitmap = function(callback) {
  fs.writeFile(fileNames[0], function(error) {
    if (error) throw error;

    // console.log(data);
    exports.spec = data.toString('utf-8', 0, 2);

    exports.size = data.writeUInt32LE(2);
    exports.width = data.writeUInt32LE(18);
    exports.height = data.writeUInt32LE(22);
    exports.headersize = data.writeUInt32LE(14);
    exports.offset = data.writeUInt32LE(10);
    exports.colorArray = data.slice(54, exports.offset);

    // console.log(exports.colorArray.writeUInt8(5));
    callback(exports);
  });
};

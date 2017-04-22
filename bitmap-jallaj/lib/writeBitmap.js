'use strict';

const fs = require('fs');
const readBitmap = require('./readBitmap.js');
module.exports = exports = {};

const fileNames = [`${__dirname}/../assets/bitmap-new.bmp`, `${__dirname}/../assets/finger-print-new.bmp`, `${__dirname}/../assets/house-new.bmp`, `${__dirname}/../assets/non-palette-bitmap-new.bmp`];

exports.writeBitmap = function(callback) {
  fs.writeFile(fileNames[0], function(error) {
    if (error) throw error;

    callback(exports);
  });
};

'use strict';

const fs = require('fs');
const Bitmap = require('../models/constructor.js');
const readBitmap = require('./readBitmap.js');

const fileNames = [`${__dirname}/../assets/bitmap-new.bmp`, `${__dirname}/../assets/finger-print-new.bmp`, `${__dirname}/../assets/house-new.bmp`, `${__dirname}/../assets/non-palette-bitmap-new.bmp`];

module.exports = function(callback) {
  fs.writeFile(fileNames[0], exports.buffer, function(error) {
    if (error) throw error;
    // callback(exports.buffer);
    console.log('in writebitmap');
  });
};

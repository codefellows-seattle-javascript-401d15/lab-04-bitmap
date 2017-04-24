'use strict';

const fs = require('fs');
const Bitmap = require('../models/constructor.js');
module.exports = exports = {};

const fileNames = [`${__dirname}/../assets/bitmap.bmp`, `${__dirname}/../assets/finger-print.bmp`, `${__dirname}/../assets/house.bmp`, `${__dirname}/../assets/non-palette-bitmap.bmp`];

exports.readBitmap = function(callback) {
  fs.readFile(fileNames[3], function(error, data) {
    if (error) throw error;
    let bitmapNew = new Bitmap(data);
    console.log('This is the new bitmap:', bitmapNew);

    // console.log(exports.colorArray.readUInt8(5));
    // console.dir(exports.colorArray.splice(0, 4));


    // console.log(exports);
    callback(bitmapNew);
  });
};



// console.log(fs.readFileSync(`${__dirname}/../assets/bitmap.bmp`));

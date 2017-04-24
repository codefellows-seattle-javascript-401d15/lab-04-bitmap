'use strict';

const fs = require('fs');
const transform = require('./transform.js');
const Buffer = require('buffer').Buffer;

module.exports = exports = {};

exports.read = function(){
  fs.readFile(`${__dirname}/../../assets/bitmap.bmp`, function(err, data){
    if(err) throw err;
    let fingerData = data;
    exports.bmp = {};
    exports.bmp.header = fingerData.toString('utf-8', 0,2);
    exports.bmp.size = fingerData.readUInt32LE(2);
    exports.bmp.offset = fingerData.readUInt32LE(10);
    exports.bmp.width = fingerData.readUInt32LE(18);
    exports.bmp.height = fingerData.readUInt32LE(22);
    exports.bmp.colors = fingerData.slice(54, exports.bmp.offset);
    exports.bmp.pixels = transform.convert(exports.bmp.colors);
    // exports.bmp.pixels = transform.invert(exports.bmp.pixels);
    exports.bmp.pixels = transform.gray(exports.bmp.pixels);
    console.dir(exports.bmp);
    // if (scale) transform.scale(exports.bmp.colors, color, number);
    exports.bmp.pixels = transform.revert(exports.bmp.pixels).toString('hex');
    fingerData.write(exports.bmp.pixels, 54, exports.bmp.offset);
    fs.writeFile(`${__dirname}/../data/newbmp.bmp`, fingerData, err => {
      if (err) throw err;
    });
  });
};

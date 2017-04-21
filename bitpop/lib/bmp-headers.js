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
    exports.bmp.inverted = transform.invert(exports.bmp.pixels).toString('hex');
    console.dir(exports.bmp);
    // if (gray) transform.gray(exporst.bmp.colors, number);
    // if (scale) transform.scale(exports.bmp.colors, color, number);
    fingerData.write(exports.bmp.inverted, 54, exports.bmp.offset);
    fs.writeFile(`${__dirname}/../data/newbmp.bmp`, fingerData, err => {
      if (err) throw err;
    });
  });
};
// 46 or 54 for color starting point

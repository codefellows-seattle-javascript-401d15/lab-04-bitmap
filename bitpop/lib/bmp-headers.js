'use strict';

const fs = require('fs');

module.exports = exports = {};

exports.read = function(){
  fs.readFile(`${__dirname}/../../assets/finger-print.bmp`, function(err, data){
    if(err) throw err;
    let fingerData = data;
    exports.bmp = {};
    exports.bmp.header = fingerData.toString('utf-8', 0,2);
    exports.bmp.size = fingerData.readUInt32LE(2);
    exports.bmp.offset = fingerData.readUInt32LE(10);
    exports.bmp.width = fingerData.readUInt32LE(18);
    exports.bmp.height = fingerData.readUInt32LE(22);
    exports.bmp.colors = fingerData.slice(54, exports.bmp.offset);
    console.log(exports.bmp);
  });
};
exports.read();
// 46 or 54 for color starting point

'use strict';

const fs = require('fs');
module.exports = exports = {};

const fileNames = [`${__dirname}/../assets/bitmap.bmp`, `${__dirname}/../assets/finger-print.bmp`, `${__dirname}/../assets/house.bmp`, `${__dirname}/../assets/non-palette-bitmap.bmp`];

exports.readBitmap = function(callback) {
  fs.readFile(fileNames[0], function(error, data) {
    if (error) throw error;

    // console.log(data);
    exports.spec = data.toString('utf-8', 0, 2);

    exports.size = data.readUInt32LE(2);
    exports.width = data.readUInt32LE(18);
    exports.height = data.readUInt32LE(22);
    exports.headersize = data.readUInt32LE(14);
    exports.offset = data.readUInt32LE(10);
    exports.colorArray = data.slice(54, exports.offset);
    // console.log(exports.colorArray.readUInt8(5));
        
    // console.log(arrayOfFours);
    
    console.log('test');
    
    // console.dir(exports.colorArray.splice(0, 4));
    

    // console.log(exports);
    callback(exports);
  });
};



// console.log(fs.readFileSync(`${__dirname}/../assets/bitmap.bmp`));

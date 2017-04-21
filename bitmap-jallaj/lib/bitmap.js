'use strict';

const fs = require('fs');
module.exports = exports = {};

exports.bitmap = function(callback) {
  fs.readFile(`${__dirname}/../assets/bitmap.bmp`, function(error, data) {
    if (error) throw error

    let bmpBuffer = {};

    // console.log(data);
    exports.spec = data.toString('utf-8', 0, 2);

    exports.size = data.readUInt32LE(2);
    exports.width = data.readUInt32LE(18);
    exports.height = data.readUInt32LE(22);
    exports.headersize = data.readUInt32LE(14);
    exports.offset = data.readUInt32LE(10);
    exports.colorArray = data.slice(54, exports.offset);
    console.log(exports.colorArray.readUInt8(5));
    

    for(var i = 0; i < exports.colorArray.length; i += 4) {
      let arrayOfFours = [];
      arrayOfFours.push(exports.colorArray[i]);
      arrayOfFours.push(exports.colorArray[i+1]);
      arrayOfFours.push(exports.colorArray[i+2]);
      // console.log(arrayOfFours[0]);
      arrayOfFours[0] += 25;
      // console.log(arrayOfFours[0]); 
    }
    
    // console.log(arrayOfFours);
    
    console.log('test');
    
    // console.dir(exports.colorArray.splice(0, 4));
    

    // console.log(exports);
    callback(exports);
  });
};



// console.log(fs.readFileSync(`${__dirname}/../assets/bitmap.bmp`));

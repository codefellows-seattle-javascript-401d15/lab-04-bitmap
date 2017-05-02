'use strict';

const fs = require('fs');
const BitData = require('../lib/bmp-reader.js');

module.exports = function(filePath, bitMap, callback){
  fs.writeFile(filePath, bitMap.buf, function(err){
    if(err) callback (err);
    callback(null, bitMap.buf);
    console.log('saved');
  }
 );
};

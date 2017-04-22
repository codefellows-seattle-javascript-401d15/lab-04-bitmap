'use strict';

const fs = require('fs');
const BitData = require('../lib/bmp-reader.js');

module.exports = function(filePath, newbit, callback){
  fs.writeFile(filePath, newbit, function(err){
    if(err) return callback (err);
    // callback(null, newbit);
    console.log('saved');
  }
 );
};

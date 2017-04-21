'use strict';

const readFile = require('./bit-headers.js');
const transformFile = require('./transform.js');
const exportFile = require('./export.js');

module.exports = exports = function() {
  return readFile('./assets/bitmap.bmp', function(err, bitmap) {
    if(err) throw new Error('failed to read the bitmap');
    transformFile.transformData(bitmap);
    return exportFile('./assets/output.bmp', bitmap, function(err) {
      if(err) throw new Error('failed to transform the image');
    });
  });
};

exports();


// const fs = require('fs');
// const bitmap = fs.readFileSync('./assets/bitmap.bmp'); //NOT SYNCH WE WANT ASYNCH
// const transform = require(`${__dirname}/lib/transform.js`);
// const headers = require('./lib/bit-headers.js');
//
// // function to call headers function
// headers.getHeaderData();
//
// // function to call transform function
// bitmap.transform.invertColors();
//
//
//
//
// // function to write new BMP file after transform

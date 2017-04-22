'use strict';

const fs = require('fs');
const ImageArray = ['../data/bitmap.bmp', '../data/finger-print.bmp', '../data/house.bmp', '../data/non-palette-bitmap.bmp'];
const BitData = require('../lib/construct.js');

const bmpCreate = module.exports = function(filePaths, callback){
  // for (var i = 0; i < ImageArray.length; i++ ) {
  fs.readFile(filePaths, (err, data) => {
    if (err) return callback (err);
    let newbit = new BitData(data);
    callback(null, newbit);
  });
  // }
};
//error with callback, data not being used in write

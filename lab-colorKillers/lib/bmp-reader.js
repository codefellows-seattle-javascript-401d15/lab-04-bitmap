'use strict';

const fs = require('fs');
const ImageArray = ['../data/bitmap.bmp', '../data/finger-print.bmp', '../data/house.bmp', '../data/non-palette-bitmap.bmp'];
const BitData = require('../lib/construct.js');

const bmpCreate = module.exports = function(filePath){
  // for (var i = 0; i < ImageArray.length; i++ ) {
  fs.readFile(ImageArray[0], (err, data) => {
    if (err) return (err);
    let newbit = new BitData(data);
    console.dir(newbit.buf);
  });
  // }
};

bmpCreate();

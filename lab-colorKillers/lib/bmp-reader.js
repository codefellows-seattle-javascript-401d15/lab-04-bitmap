'use strict';

const fs = require('fs');
const ImageArray = ['../data/bitmap.bmp', '../data/finger-print.bmp', '../data/house.bmp', '../data/non-palette-bitmap.bmp'];
// const ColorConstruct = fs.readFileSync(`../lib/construct.js`);

module.exports = (filepaths, callback) => {
  fs.readFile(filepaths, (err, data) => {
    if (err) return callback (err);
    let colormap = new (data);
    // colormap.invert();
    callback(null, colormap);
  });
};

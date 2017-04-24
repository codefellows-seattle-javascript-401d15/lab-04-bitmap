'use strict';

const readFile = require('./lib/readFile.js');
const transformFile = require('./lib/transform.js');
const exportFile = require('./lib/export.js');

let colorPicker = String(process.argv[2]).toLowerCase();
let outputName = String(process.argv[3]);

module.exports = exports = function() {
  return readFile('./assets/bitmap.bmp', function(err, bitmap) {
    console.log(`bitmap = ${bitmap}`);
    if (err) throw new Error('failed to read the bitmap');
    if (colorPicker == 'invertcolors') {
      transformFile.invertColors(bitmap);
    } else if (colorPicker == 'monochrome') {
      transformFile.monoChrome(bitmap);
    } else if (colorPicker == 'randomcolors') {
      transformFile.randomColors(bitmap);
    } else {
      console.log('You didn\'t pick a color you dummy');
    }
    return exportFile(`output/new_${colorPicker}_${outputName}.bmp`, bitmap, function(err) {
      if (err) throw new Error('failed to transform the image');
    });
  });
};

exports();

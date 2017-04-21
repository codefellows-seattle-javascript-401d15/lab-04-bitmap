'use strict';

const readFile = require('./lib/readFile.js');
const transformFile = require('./lib/transform.js');
const exportFile = require('./lib/export.js');

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
    }
    return exportFile('./assets/output.bmp', bitmap, function(err) {
      if (err) throw new Error('failed to transform the image');
    });
  });
};


let colorPicker = String(process.argv[2]).toLowerCase();



exports();

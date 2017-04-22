'use strict';

const readFile = require('./lib/readFile.js');
const transformFile = require('./lib/transform.js');
const exportFile = require('./lib/export.js');

let colorInput = String(process.argv[2]).toLowerCase();
let outputName = String(process.argv[3]);
let bitmapInput = String(process.argv[4]).toLowerCase();
let selectedBitmap = selectPath(bitmapInput);

function selectPath (query) {
  let pathArray = ['./assets/bitmap.bmp', './assets/finger.bmp', './assets/house.bmp', './npb.bmp'];
  return pathArray.filter(el => el.indexOf(query) > -1).toString();
}

module.exports = exports = function() {
  return readFile(selectedBitmap, function(err, bitmap) {
    console.log(`bitmap = ${bitmap}`);
    if (err) throw new Error('failed to read the bitmap');
    if (colorInput == 'invertcolors') {
      transformFile.invertColors(bitmap);
    } else if (colorInput == 'monochrome') {
      transformFile.monoChrome(bitmap);
    } else if (colorInput == 'randomcolors') {
      transformFile.randomColors(bitmap);
    } else {
      console.log('You didn\'t pick a color you dummy');
    }
    return exportFile(`output/new_${colorInput}_${outputName}.bmp`, bitmap, function(err) {
      if (err) throw new Error('failed to transform the image');
    });
  });
};

exports();

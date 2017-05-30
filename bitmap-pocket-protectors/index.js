'use strict';

const fileHandler = require('./lib/file-handler.js');
const bitmapBuilder = require('./lib/bitmap.js');

//fileHandler.readFromFile(process.argv[2], process.argv[3], bitmapBuilder);

//fileHandler.readFromFile('non-palette-bitmap.bmp', 'invert', bitmapBuilder);
// fileHandler.readFromFile('non-palette-bitmap.bmp', 'grayScale', bitmapBuilder);
// fileHandler.readFromFile('non-palette-bitmap.bmp', 'greenScale', bitmapBuilder);
// fileHandler.readFromFile('non-palette-bitmap.bmp', 'blueScale', bitmapBuilder);
// fileHandler.readFromFile('non-palette-bitmap.bmp', 'redScale', bitmapBuilder);
// fileHandler.readFromFile('test-301x301.bmp', 'invert', bitmapBuilder);
// fileHandler.readFromFile('test-301x301.bmp', 'grayScale', bitmapBuilder);
// fileHandler.readFromFile('test-301x301.bmp', 'greenScale', bitmapBuilder);
// fileHandler.readFromFile('test-301x301.bmp', 'blueScale', bitmapBuilder);
// fileHandler.readFromFile('test-301x301.bmp', 'redScale', bitmapBuilder);
 fileHandler.readFromFile('cat.jpg', 'invert', bitmapBuilder);

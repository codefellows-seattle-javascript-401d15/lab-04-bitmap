'use strict';

const fileHandler = require('./lib/file-handler.js');
const bitmapBuilder = require('./lib/bitmap.js');

// Invoke readFromFile here
fileHandler.readFromFile('bitmap.bmp', bitmapBuilder);

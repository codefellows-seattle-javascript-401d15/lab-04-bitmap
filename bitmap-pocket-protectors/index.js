'use strict';

const fileHandler = require('./lib/file-handler.js');
const bitmapBuilder = require('./lib/bitmap.js');

// Invoke readFromFile here
fileHandler.readFromFile(process.argv[2], process.argv[3], bitmapBuilder);

'use strict';

const writeFile = require('./lib/write-file.js');
const BitData = require('./lib/bmp-reader.js');


BitData('data/bitmap.bmp', writeFile('output/output.js', BitData));

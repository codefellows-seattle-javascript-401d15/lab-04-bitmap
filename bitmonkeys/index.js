'use strict';

const read = require('./lib/read.js');
const write = require('./lib/write.js');
const fs = require('fs');
const xform = require('./lib/transform.js');

// read.readBit('bitmap.bmp');
// function(origFile, newFileName, xformType){
// read( xform( write()))
// }
read.readBit('bitmap.bmp', 'newBMP.bmp');

'use strict';

const header = require('./lib/bmp-headers.js');

let invert = false;
let gray = true;
let scale = false;
let callback = (data) => console.log(data);
header.read(invert, gray, scale, callback);

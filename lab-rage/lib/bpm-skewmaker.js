'use strict';

const fs = require('fs');
let buff;
let typeArray = [monoChrome, redShift, invertColor];
module.exports = exports = {};

exports.`${typeArray}` = function(callback) {
 fs.readFile(`${__dirname}/../../assets/bitmap.bmp`, function(err, data){
   if(err) throw new Error('needs a bitmap buffer');
   buff = data;
   callback(buff);
   fs.writeFile(`${__dirname}/../transformed-assets/${typeArray}.bmp`, buf);
 });
};

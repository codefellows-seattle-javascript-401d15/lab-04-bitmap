'use strict';

const fs = require('fs');
let buff;
// let typeArray = [monoChrome, redShift, invertColor];
module.exports = exports = {};

exports.monoChrome = function(callback) {
  fs.readFile(`${__dirname}/../../assets/bitmap.bmp`, function(err, data){
    if(err) throw new Error('needs a bitmap buffer');
    buff = data;
    callback(buff);
    fs.writeFile(`${__dirname}/../transformed-assets/monoChromed.bmp`, buff);
  });
};

exports.redShift = function(callback) {
  fs.readFile(`${__dirname}/../../assets/bitmap.bmp`, function(err, data){
    if(err) throw new Error('needs a bitmap buffer');
    buff = data;
    callback(buff);
    fs.writeFile(`${__dirname}/../transformed-assets/redShifted.bmp`, buff);
  });
};

exports.invertColor = function(callback) {
  fs.readFile(`${__dirname}/../../assets/bitmap.bmp`, function(err, data){
    if(err) throw new Error('needs a bitmap buffer');
    buff = data;
    callback(buff);
    fs.writeFile(`${__dirname}/../transformed-assets/inverted.bmp`, buff);
  });
};

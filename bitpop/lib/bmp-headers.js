'use strict';

const fs = require('fs');

module.exports = exports = {};

exports.read = function(){
  fs.readFile(`${__dirname}/../../assets/finger-print.bmp`, function(err, data){
    if(err) throw err;
    let fingerData = data;
    exports.bmp = {};
    exports.bmp.header = fingerData.toString('utf-8', 0,2);
    exports.bmp.size = fingerData.readUInt32LE(2);
    console.log(exports.bmp);
  });
};
exports.read();

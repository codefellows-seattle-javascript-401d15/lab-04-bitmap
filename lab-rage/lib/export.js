'use strict';

const fs = require('fs');

module.exports = function (path, buffData, callback) {
  fs.writeFile(path, buffData.bmpImage, function (err) {
    if(err) throw err;
    console.log(` write : ${buffData.bmpImage.colorArray}`);
    callback(null, buffData);
  });

};

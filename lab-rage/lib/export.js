'use strict';

const fs = require('fs');

module.exports = function (path, buffData, callback) {
  fs.writeFile(path, buffData.bmpImage, function (err) {
    if(err) throw err;
    callback(null, buffData);
  });
};

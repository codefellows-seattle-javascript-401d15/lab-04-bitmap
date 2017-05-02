'use strict';

const fs = require('fs');

module.exports = exports = {};

exports.readFromFile = function(path, transform, callback) {
  exports.newfile = path.split('.', 1);
  fs.readFile(`${__dirname}/../data/${path}`, function(err, data) {
    if (err) throw err;
    console.log(data);
    callback(data, path, transform);
  });
};

exports.writeToFile = function(name, buffer, callback) {
  fs.writeFile(`${__dirname}/../data/${exports.newfile}-${name}.bmp`, buffer, function(err) {
    if (err) return callback(err);
    console.log('Bitmap file transformation complete!');
  });
};

'use strict';

const fs = require('fs');

module.exports = exports = {};

exports.readFromFile = function(path, transform, callback) {
  fs.readFile(`${__dirname}/../data/${path}`, function(err, data) {
    if (err) throw err;
    console.log(data);
    callback(data, path, transform);
  });
};

exports.writeToFile = function(fileName, buffer, callback) {
  fs.writeFile(`${__dirname}/../data/${fileName}`, function(err) {
    if (err) return callback(err);
  });
};

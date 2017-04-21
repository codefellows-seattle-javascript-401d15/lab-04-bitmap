'use strict';

const fs = require('fs');

module.exports = exports = {};

exports.readFromFile = function(path, callback) {
  fs.readFile(`${__dirname}/../data/${path}`, function(err, data) {
    if (err) throw err;
    console.log(data);
    callback(data, path);
  });
};

exports.writeToFile = function(fileName, buffer) {
  fs.writeFile(`${__dirname}/../data/${fileName}`, function(err) {
    if (err) throw err;
  });
};

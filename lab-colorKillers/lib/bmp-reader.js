'use strict';

const fs = require('fs');
const BitData = require('../lib/construct.js');

module.exports = function(filePaths, callback){
  fs.readFile(filePaths, (err, data) => {
    if (err) callback (err);
    let newbit = new BitData(data);
    callback(null, newbit);
  });
};

'use strict';

const fs = require('fs');
const BitData = require('../lib/construct.js');

module.exports = function(filePaths, callback){
  // for (var i = 0; i < ImageArray.length; i++ ) {
  fs.readFile(filePaths, (err, data) => {
    if (err) callback (err);
    let newbit = new BitData(data);
    callback(null, newbit);
  });
  // }
};

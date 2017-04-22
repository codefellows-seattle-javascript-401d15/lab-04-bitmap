const fs = require('fs');
const Bitmap = require('./bit-headers.js');

module.exports = function (input, callback) {
  fs.readFile(input, (err, data) => {
    if(err) throw err;
    let imgData = new Bitmap(data);
    callback(null, imgData); // look up null functionality
  });
  console.log('callback()');
};

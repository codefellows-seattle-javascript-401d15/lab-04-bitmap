'use strict';

const fs = require('fs');
const BitData = require('../lib/bmp-reader.js');


fs.writeFile('../output/newBMP.bmp', BitData.buf, function(err){
  if(err) return (err);
  console.log(exports.newbit);
});
console.log('saved');

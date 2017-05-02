'use strict';

const fs = require('fs');
const bitmap = `${__dirname}/assets/bitmap.bmp`;
const transforms = require(`${__dirname}/lib/transform.js`);
const bitHeaders = require(`${__dirname}/lib/bit-headers.js`);

exports.readWrite =
  fs.readFile(bitmap, function(err, data){
    if(err) throw err;

    bitHeaders.newPic = new bitHeaders.Bmp(data, 'rgbColor');

    transforms.rgbColor(bitHeaders.newPic);

    fs.writeFile(bitHeaders.newPic.filePath, bitHeaders.newPic.buff, function(err){
      if(err) throw err;
    });

    fs.readFile(bitmap, function(err, data){
      if(err) throw err;

      bitHeaders.newPic = new bitHeaders.Bmp(data, 'greyScale');

      transforms.greyScale(bitHeaders.newPic);

      fs.writeFile(bitHeaders.newPic.filePath, bitHeaders.newPic.buff, function(err){
        if(err) throw err;
      });
    });
    fs.readFile(bitmap, function(err, data){
      if(err) throw err;

      bitHeaders.newPic = new bitHeaders.Bmp(data, 'invert');

      transforms.inverter(bitHeaders.newPic);

      fs.writeFile(bitHeaders.newPic.filePath, bitHeaders.newPic.buff, function(err){
        if(err) throw err;
      });
    });
  });

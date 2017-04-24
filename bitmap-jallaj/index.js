'use strict';

const fs = require('fs');
const Bitmap = require('./models/constructor.js');
const bitmapModule = require(`${__dirname}/lib/readBitmap.js`);
const transform = require(`${__dirname}/models/transform.js`);
const writeBitmap = require(`${__dirname}/lib/writeBitmap.js`);


(function(){
  if(process.argv[2] === 'invert') {
    bitmapModule.readBitmap(function(newBitmap) {
      transform.inversion(newBitmap);
      console.log(newBitmap);
      writeBitmap(newBitmap, function() {
      });
    });
  } else if(process.argv[2] === 'gray') {
    bitmapModule.readBitmap(function(newBitmap) {
      transform.grayscale(newBitmap);
      console.log(newBitmap);
      writeBitmap(newBitmap, function() {
      });
    });
  } else if(process.argv[2] === 'scale') {
    bitmapModule.readBitmap(function(newBitmap) {
      transform.scale(newBitmap);
      console.log(newBitmap);
      writeBitmap(newBitmap, function() {
      });
    });
  } else {
    console.log('Please enter a valid command: invert, gray, or scale');
  }
}());
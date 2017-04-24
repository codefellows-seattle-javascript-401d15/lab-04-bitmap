'use strict';

const fs = require('fs');
const Bitmap = require('../models/constructor.js');
const bitmapModule = require(`${__dirname}/../lib/readBitmap.js`);
const assert = require('assert');
const app = require('../index.js');
const expect = require('mocha').expect;
const fileNames = [`${__dirname}/../assets/bitmap-new.bmp`];

describe('transform to inverted file', function() {
  it('it should transform color of bitmap to be inverted', done =>{
    bitmapModule.readBitmap(function(newBitmap) {
      transform.inversion(newBitmap);
      console.log(newBitmap);
      writeBitmap(newBitmap, function() {
      });
    });
    expect(`${__dirname}/../assets/bitmap-new.bmp`).to.exist;
    done();
  });
});

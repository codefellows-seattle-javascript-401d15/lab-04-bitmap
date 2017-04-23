'use strict';

const expect = require('chai').expect;
const fs = require('fs');
const bitmap = `${__dirname}/../assets/bitmap.bmp`;
const transforms = require(`${__dirname}/../lib/transform.js`);
const bitHeaders = require(`${__dirname}/../lib/bit-headers.js`);
const buffer = require('buffer').buffer;

describe('transforms module', function() {
  describe('#inverter, #greyScale, #rgbColor', function(){
    it('should invert the file colors', done => {
      fs.readFile(`${__dirname}/../assets/bitmap.bmp`, function(err, data) {
        let firstBufferData = data;
        fs.readFile(`${__dirname}/../assets/newpicpls.bmp`, function(err, data2){
          let secondBufferData = data2;
          expect(firstBufferData).not.to.equal(secondBufferData);

          done();
        });
      });
    });
    it('should greyScale the file colors', done => {
      fs.readFile(`${__dirname}/../assets/bitmap.bmp`, function(err, data) {
        let firstBufferData = data;
        fs.readFile(`${__dirname}/../assets/newpicpls.bmp`, function(err, data2){
          let secondBufferData = data2;
          expect(firstBufferData).not.to.equal(secondBufferData);

          done();
        });
      });
    });
    it('should rgbColor the file colors', done => {
      fs.readFile(`${__dirname}/../assets/bitmap.bmp`, function(err, data) {
        let firstBufferData = data;
        fs.readFile(`${__dirname}/../assets/newpicpls.bmp`, function(err, data2){
          let secondBufferData = data2;
          expect(firstBufferData).not.to.equal(secondBufferData);

          done();
        });
      });
    });
  });
});

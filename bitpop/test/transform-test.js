'use strict';

const header = require('./../lib/bmp-headers.js');
const expect = require('chai').expect;
const fs = require('fs');
let original;


describe('transformations', function() {
  beforeEach(function() {
    fs.readFile(`${__dirname}/../../assets/finger-print.bmp`, function(err, data){
      if(err) throw err;
      original = data;
    });
  });
  describe('#all',function() {
    it('should return a object', function(done) {
      let invert = true;
      let gray = false;
      let scale = false;
      header.read(invert, gray, scale, function(fingerData) {
        expect(typeof fingerData).to.equal('object');
        done();
      });
    });
    it('should be able to run all three transforms', function(done) {
      let invert = true;
      let gray = true;
      let scale = true;
      header.read(invert, gray, scale, function(fingerData) {
        expect(fingerData).to.exist;
        done();
      });
    });
    it('should be able to run no transforms', function(done) {
      let invert = false;
      let gray = false;
      let scale = false;
      header.read(invert, gray, scale, function(fingerData) {
        expect(fingerData).to.exist;
        done();
      });
    });
    it('should be different', function(done) {
      let invert = true;
      let gray = false;
      let scale = false;
      header.read(invert, gray, scale, function(fingerData) {
        expect(fingerData.slice(54, 58)).to.not.equal(original.slice(54, 58));
        done();
      });
    });
  });
});

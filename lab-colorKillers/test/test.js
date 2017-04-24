'use strict';

const fs = require('fs');
const writeFile = require('../lib/write-file.js');
const readFile = require('../lib/bmp-reader.js');
const constructFunc = require('../lib/construct.js');
const testFile = fs.readFileSync('./data/bitmap.bmp');

const expect = require('chai').expect;

describe('constructor function', function(){
  describe('produces an object', function(){
    let testData = new constructFunc(testFile);
    it('should create new BitMap object', function(){
      expect(testData).to.be.an('object');
    } );
  });
});

describe('invert colors function', function(){
  describe('invert colors in colorArray', function(){
    let testData = new constructFunc(testFile);
    testData.invert();
    it('should equal inverted number', function(){
      expect(testData.colorArray[0]).to.equal(255);
      expect(testData.colorArray[1]).to.equal(255);
      expect(testData.colorArray[2]).to.equal(255);
      expect(testData.colorArray[3]).to.equal(0);
    });
  });
});

describe('color change function', function(){
  describe('change colors in colorArray', function(){
    let testData = new constructFunc(testFile);
    testData.changeColor();
    it('should equal inverted number', function(){
      expect(testData.colorArray[1]).to.equal(0);
      expect(testData.colorArray[5]).to.equal(2);
      expect(testData.colorArray[9]).to.equal(2);
      expect(testData.colorArray[13]).to.equal(3);
    });
  });
});

describe('greyscale function', function() {
  describe('change colors in colorArray to greyscale', function() {
    let testData = new constructFunc(testFile);
    testData.greyScale();
    it('should equal averaged number', function() {
      expect(testData.colorArray[4]).to.equal(39);
      expect(testData.colorArray[5]).to.equal(39);
      expect(testData.colorArray[6]).to.equal(39);
      expect(testData.colorArray[7]).to.equal(0);
    });
  });
});

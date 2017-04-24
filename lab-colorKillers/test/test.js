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

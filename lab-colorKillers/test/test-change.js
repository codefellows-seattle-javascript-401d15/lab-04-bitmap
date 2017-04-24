'use strict';
const expect = require('chai').expect;
const fs = require('fs');
const constructFunc = require('../lib/construct.js');
const testFile = fs.readFileSync('./data/bitmap.bmp');

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

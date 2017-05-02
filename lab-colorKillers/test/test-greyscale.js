'use strict';
const expect = require('chai').expect;
const fs = require('fs');
const constructFunc = require('../lib/construct.js');
const testFile = fs.readFileSync('./data/bitmap.bmp');

describe('color change function', function(){
  describe('change colors in colorArray', function(){
    let testData = new constructFunc(testFile);
    testData.changeColor();
    it('should equal changed number', function(){
      expect(testData.colorArray[1]).to.equal(0);
      expect(testData.colorArray[5]).to.equal(2);
      expect(testData.colorArray[9]).to.equal(2);
      expect(testData.colorArray[13]).to.equal(3);
    });
  });
});

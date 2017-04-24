'use strict';

const writeFile = require('../lib/write-file.js');
const readFile = require('../lib/bmp-reader.js');
const constructFunc = require('../lib/construct.js');

const expect = require('chai').expect;
const fs = require('fs');

describe('constructor function', function(){
  describe('produces an object', function(){
    let testData = new constructFunc.BitMap(fs.readFileSync('../data/bitmap.bmp'));
    it('should return object', function(err){
      if(err) throw err;
      it('should create new bitmap object', function(){
        expect(testData).to.be.an('object');

      } );
    });
  });
});

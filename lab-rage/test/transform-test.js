'use strict';

const fs = require('fs');
const expect = require('chai').expect;
const headers = require('../lib/bitHeaders.js');
const read = require('../lib/readFile.js');

// const transformFile = require('../lib/transform.js');

// describe('Transform Test', function() {
//   describe('#test randomColors', function() {
//     transformFile.randomColors(bitmap);
//       it('Should render different colors than the original image', function() {
//       expect(transformFile.bitmap.colorArray[0]).to.not.equal(transformFile.bitmap.colorArray[0]);
//     });
//   });
//
//   describe('#test greyscale transform', function() {
//     it('', function() {
//
//     });
//   });
// });

describe('Constructor Test', function() {

  before('Create Object', function() {
    this.testHeaders = new headers(fs.readFileSync('./assets/bitmap.bmp'));
    console.log('Inside Constructor Test');
    console.log(this.testHeaders);
  });

  it('An object is returned', function(done) {
    expect(this.testHeaders).to.be.instanceof(Object);
    done();
  });
});

describe('Test readFile', function() {

  let
});

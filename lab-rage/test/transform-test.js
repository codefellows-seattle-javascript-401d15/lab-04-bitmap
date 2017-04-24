'use strict';

const fs = require('fs');
const expect = require('chai').expect;
const headers = require('../lib/bitHeaders.js');
const read = require('../lib/readFile.js');
const transformFile = require('../lib/transform.js');

// describe('Transform Test', function() {
//
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
  });
  it('An object is returned', function(done) {
    expect(this.testHeaders).to.be.instanceof(Object);
    done();
  });
});

describe('Test readFile', function() {
  var mockData = {
    spec: 'BM',
    size: 11078,
    offset: 1078,
    width: 100,
    height: 100,
  };
  it('Should check the properties of the image', function(done) {
    read('./assets/bitmap.bmp', function(err, data) {
      if (err) throw err;
      expect(mockData.spec).to.be.equal(data.spec);
      expect(mockData.size).to.be.equal(data.size);
      expect(mockData.offset).to.be.equal(data.offset);
      expect(mockData.width).to.be.equal(data.width);
      expect(mockData.height).to.be.equal(data.height);
      done();
    });
  });
});

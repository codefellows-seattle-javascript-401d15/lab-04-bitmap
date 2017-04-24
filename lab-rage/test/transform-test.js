'use strict';

const fs = require('fs');
const expect = require('chai').expect;

// const Transform = require('../lib/transform.js');
const BitHeaders = require('../lib/bitHeaders.js');

describe('bitHeaders.js module tests', function(done) {
  fs.readFile(`${__dirname}/test/test_randomcolors.bmp`, (err, data) => {
    if (err) throw err;
    this.BitHeaders = new BitHeaders(data);
    done();
  });
  console.log('BitHeaders', BitHeaders);
});

describe('bitHeaders.js module tests', () => {
  it('should return the image size', () => {
    expect(this.BitHeaders.size).to.equal(11078);
  });
  it('should return expected length of colorArray', () => {
    expect(this.BitHeaders.colorArray.length).to.equal(1024);
  });
  it('should return expected offset', () => {
    expect(this.BitHeaders.offset).to.equal(1078);
  });
  it('should return expected colorArray length', () => {
    expect(this.BitHeaders.colorArray.length).to.equal(1024);
  });
  it('should return expected pixelArray length', () => {
    expect(this.BitHeaders.pixelArray.length).to.equal(10000);
  });
});

//
// describe('testing readFile.js', function() {
//   before( () => {
//     this.testBuffer - new Buffer(4);
//     this.testColor = new Color(this.testBuffer);
//     console.log(this.testColor);
//   });
//
//   describe('testing transform constructor')

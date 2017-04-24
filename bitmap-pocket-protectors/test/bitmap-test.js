'use strict';

const expect = require('chai').expect;
const fs = require('fs');
const fileHandler = require('../lib/file-handler.js');
const bitmapBuilder = require('../lib/bitmap.js');

describe('file-handler.js', function() {
  describe('#invert', function() {
    fileHandler.readFromFile('bitmap.bmp', 'invert', bitmapBuilder);
    it('should create a new .bmp file with inverted colors', function(done) {
      let testdir = [];
      fs.readdir('data/', function(err, files) {
        if (err) throw err;
        testdir = files;
        console.log(testdir);
      });
      done();
      expect(testdir).to.include('bitmap-inverted.bmp');
    });
  });
});

describe('file-handler.js', function() {
  describe('#grayScale', function() {
    fileHandler.readFromFile('bitmap.bmp', 'grayScale', bitmapBuilder);
    it('should create a new .bmp file with grayscaled colors', function(done) {
      let testdir = [];
      fs.readdir('data/', function(err, files) {
        if (err) throw err;
        testdir = files;
        console.log(testdir);
      });
      done();
      expect(testdir).to.include('bitmap-grayscaled.bmp');
    });
  });
});

describe('file-handler.js', function() {
  describe('#redScale', function() {
    fileHandler.readFromFile('bitmap.bmp', 'redScale', bitmapBuilder);
    it('should create a new .bmp file with redscaled colors', function(done) {
      let testdir = [];
      fs.readdir('data/', function(err, files) {
        if (err) throw err;
        testdir = files;
        console.log(testdir);
      });
      done();
      expect(testdir).to.include('bitmap-redscaled.bmp');
    });
  });
});

describe('file-handler.js', function() {
  describe('#blueScale', function() {
    fileHandler.readFromFile('bitmap.bmp', 'blueScale', bitmapBuilder);
    it('should create a new .bmp file with bluescaled colors', function(done) {
      let testdir = [];
      fs.readdir('data/', function(err, files) {
        if (err) throw err;
        testdir = files;
        console.log(testdir);
      });
      done();
      expect(testdir).to.include('bitmap-bluescaled.bmp');
    });
  });
});

describe('file-handler.js', function() {
  describe('#greenScale', function() {
    fileHandler.readFromFile('bitmap.bmp', 'greenScale', bitmapBuilder);
    it('should create a new .bmp file with greenscaled colors', function(done) {
      let testdir = [];
      fs.readdir('data/', function(err, files) {
        if (err) throw err;
        testdir = files;
        console.log(testdir);
      });
      done();
      expect(testdir).to.include('bitmap-greenscaled.bmp');
    });
  });
});

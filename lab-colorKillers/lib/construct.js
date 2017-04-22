'use strict';

// const fs = require('fs');
// const data = fs.readFileSync(`../data/bitmap.bmp`);
// const bmp = {};
// module.exports = exports = {};

const BitMap = module.exports = function(data) {
  this.spec = data.toString('utf-8', 0, 2);
  this.size = data.readUInt32LE(2);
  this.width = data.readUInt32LE(18);
  this.height = data.readUInt32LE(22);
  this.offset = data.readUInt32LE(10);
  this.colorArray = data.slice(54, this.offset);
  this.buf = data;
};

//
BitMap.prototype.invert = function() {
  for (var i = 0; i < this.colorArray.length; i++) {
    this.colorArray[i] = 255 - this.colorArray[i];
    // this.colorArray[i+1] = 255 - this.colorArray[i];
    // this.colorArray[i+2] = 255 - this.colorArray[i];
  }
  // console.dir(this.colorArray);
};


// console.dir(bmp.colorArray);

// exports.invert();
//
// let changeColor = function(){
//   let changeColorArray = [];
//   for (var i = 1; i < bmp.colorArray.length; i += 4) {
//     let changedColor = Math.round(bmp.colorArray[i]/5);
//     changeColorArray.push(changedColor);
//   }
//   console.log(changeColorArray);
// };
// console.dir(bmp.colorArray);
// changeColor();

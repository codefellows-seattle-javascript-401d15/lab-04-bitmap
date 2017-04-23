'use strict';

const BitMap = module.exports = function(data) {
  this.spec = data.toString('utf-8', 0, 2);
  this.size = data.readUInt32LE(2);
  this.width = data.readUInt32LE(18);
  this.height = data.readUInt32LE(22);
  this.offset = data.readUInt32LE(10);
  this.colorArray = data.slice(54, this.offset);
  this.buf = data;
};

BitMap.prototype.invert = function() {
  for (var i = 0; i < this.colorArray.length; i+=4) {
    this.colorArray[i] = 255 - this.colorArray[i];
    this.colorArray[i+1] = 255 - this.colorArray[i+1];
    this.colorArray[i+2] = 255 - this.colorArray[i+2];
  }
};

BitMap.prototype.changeColor = function(){
  for (var i = 1; i < this.colorArray.length; i += 4) {
    this.colorArray[i] = Math.round(this.colorArray[i]/2);
  }
};

BitMap.prototype.greyScale = function() {
  for (var i = 0; i < this.colorArray.length; i+=4) {
    let colorAvg = (this.colorArray[i] + this.colorArray[i+1] + this.colorArray[i+2])/3;

    this.colorArray[i] = colorAvg;
    this.colorArray[i+1] = colorAvg;
    this.colorArray[i+2] = colorAvg;
  }
};

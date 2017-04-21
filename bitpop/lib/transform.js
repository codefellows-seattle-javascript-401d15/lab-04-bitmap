'use strict';

module.exports = exports = {};

//BGRA

exports.convert = function(shaia) {
  let bgra = [];
  for(let i = 0; i < shaia.length; i += 4) {
    let pixel ={
      blue: shaia.readUInt8(i),
      green: shaia.readUInt8(i+1),
      red: shaia.readUInt8(i+2),
      alpha: shaia.readUInt8(i+3),
    };
    bgra.push(pixel);
  }
  return bgra;
};

exports.invert = function(shaia) {
  let newShaia = [];
  for (var i = 0; i < shaia.length; i++) {
    newShaia.push(255 - shaia[i].blue);
    newShaia.push(255 - shaia[i].green);
    newShaia.push(255 - shaia[i].red);
    newShaia.push(255 - shaia[i].alpha);
  }
    // newShaia.push(temp);
  return newShaia;
};

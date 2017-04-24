'use strict';

module.exports = exports = {};

//BGRA

exports.convert = function(shia) {
  let bgra = [];
  for(let i = 0; i < shia.length; i += 4) {
    let pixel ={
      blue: shia.readUInt8(i),
      green: shia.readUInt8(i+1),
      red: shia.readUInt8(i+2),
      alpha: shia.readUInt8(i+3),
    };
    bgra.push(pixel);
  }
  return bgra;
};

exports.invert = function(shia) {
  let newShia = [];
  for (var i = 0; i < shia.length; i++) {
    let pixel = {
      blue: (255 - shia[i].blue),
      green: (255 - shia[i].green),
      red: (255 - shia[i].red),
      alpha: (255 - shia[i].alpha),
    };
    newShia.push(pixel);
  }
  return newShia;
};

exports.revert = function(shia) {
  let newShia = [];
  for (var i = 0; i < shia.length; i++) {
    newShia.push(shia[i].blue);
    newShia.push(shia[i].green);
    newShia.push(shia[i].red);
    newShia.push(shia[i].alpha);
  }
  return newShia;
};

exports.gray = function(shia) {
  let newShia = [];
  for (var i = 0; i < shia.length; i++) {
    let gray = (shia[i].blue + shia[i].green + shia[i].red) / 3;
    let pixel = {
      blue: gray,
      green: gray,
      red: gray,
      alpha: shia[i].alpha,
    };
    newShia.push(pixel);
  }
  return newShia;
};

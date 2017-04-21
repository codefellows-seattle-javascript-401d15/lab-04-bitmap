'use strict';

module.exports = exports = function() {
  let arrayOfFours = [];

  for(var i = 0; i < exports.colorArray.length; i += 4) {
    arrayOfFours.push(exports.colorArray[i]);
    arrayOfFours.push(exports.colorArray[i+1]);
    arrayOfFours.push(exports.colorArray[i+2]);
    arrayOfFours[i] += 25;
    arrayOfFours[i+1] += 25;
    arrayOfFours[i+2] += 25;
  }
};


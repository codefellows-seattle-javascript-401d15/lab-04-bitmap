'use strict';

const fs = require('fs');
const bitmap = fs.readFileSync(`../data/bitmap.bmp`);
const bmp = {};

bmp.spec = bitmap.toString('utf-8', 0, 2);
bmp.size = bitmap.readUInt32LE(2);
bmp.width = bitmap.readUInt32LE(18);
bmp.height = bitmap.readUInt32LE(22);
bmp.offset = bitmap.readUInt32LE(10);
bmp.colorArray = bitmap.slice(54, bmp.offset);

// console.dir(bmp.colorArray);

function invert(){

  let newColorArray = [];

  for (var i = 0; i < bmp.colorArray.length; i++) {
    let newColor = 255 - bmp.colorArray[i];
    newColorArray.push(newColor);
  }
  console.log(newColorArray);
}


function changeColor(){
  let changeColorArray = [];
   for (var i = 1; i < bmp.colorArray.length; i += 4) {
     let changedColor = Math.round(bmp.colorArray[i]/5);
     changeColorArray.push(changedColor);
   }
   console.log(changeColorArray);
}
// invert();
console.dir(bmp.colorArray);
changeColor();

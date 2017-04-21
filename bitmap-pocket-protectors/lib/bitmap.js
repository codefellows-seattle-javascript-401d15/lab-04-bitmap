'use strict';

const fs = require('fs');
const bitmap = fs.readFileSync(`${__dirname}/../data/bitmap.bmp`);
const bmp = {};

bmp.spec = bitmap.toString('utf-8', 0, 2);
bmp.size = bitmap.readInt32LE(2);
bmp.width = bitmap.readInt32LE(18);
bmp.height = bitmap.readInt32LE(20);
bmp.offset = bitmap.readInt32LE(10);
bmp.colorArray = bitmap.slice(54, bmp.offset);
bmp.colorPalette = bmp.colorArray / 4;
bmp.paletteArray = [];

console.log('FUUUUUCK!!! ', bmp.colorPalette);
console.log(bmp.offset);
console.log(bmp.height);
console.log('colors ', bmp.colorArray);
// console.log('toString data ', bmp.colorArray.toString('decimal', 0, 2));

function loadColors(){
for (var i = 0; i < bmp.colorPallet; i++) {
  var offSet = bmp.colorPallet + i;
  bmp.palletArray[i] = {
    blue: bmp.readUInt8(offSet),
    green: bmp.readUInt8(offSet + 1)
  };



}
}
loadColors();
console.log( 'ARRRAAAAYYYY ', bmp.palletArray);

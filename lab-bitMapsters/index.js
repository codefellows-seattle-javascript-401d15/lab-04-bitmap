'use strict';

// exports = exports = {};

const fs = require('fs');
const bitmap = `${__dirname}/assets/bitmap.bmp`;
const transforms = require(`${__dirname}/lib/transform.js`);
const bitHeaders = require(`${__dirname}/lib/bit-headers.js`);

// function Bmp(data, name){
//   this.name = name;
//   this.spec = data.toString('utf-8', 0, 2);
//   this.size = data.readUInt32LE(2);
//   this.width = data.readUInt32LE(18);
//   this.height = data.readUInt32LE(22);
//   this.offset = data.readUInt32LE(10);
//   this.colorArray = data.slice(54, this.offset);
//   this.filePath = `${__dirname}/assets/${this.name}.bmp`;
//   this.buff = data;
// }

// function inverter(imgObject){
//   for(let i = 0; i < imgObject.colorArray.length; i++) {
//     let newColors = 255 - imgObject.colorArray[i].toString(16);
//     imgObject.colorArray.writeUIntLE(newColors, i, 1);
//   }
// }
//
// function greyScale (imgObject) {
//   for (let i = 0; i < imgObject.colorArray.length; i+=4) {
//     let greyScale = imgObject.colorArray[i].toString(16);
//     imgObject.colorArray.writeUIntLE(greyScale, i, 1);
//     imgObject.colorArray.writeUIntLE(greyScale, i+1, 1);
//     imgObject.colorArray.writeUIntLE(greyScale, i+2, 1);
//   }
// }
//
// function rgbColor (imgObject) {
//   for (let i = 0; i < imgObject.colorArray.length; i += 4) {
//     let rgbColor = imgObject.colorArray[i].toString(16);
//     imgObject.colorArray.writeUIntLE(rgbColor, i, 1);
//   }
// }

exports.readWrite =
  fs.readFile(bitmap, function(err, data){
    if(err) throw err;
    console.log(data);

    bitHeaders.newPic = new bitHeaders.Bmp(data, 'newpicpls');
    console.log(bitHeaders.newPic);
    // inverter(newPic);
    // greyScale(newPic);
    transforms.rgbColor(bitHeaders.newPic);
    console.log(bitHeaders.newPic);
    console.log(bitHeaders.newPic.name);
    fs.writeFile(bitHeaders.newPic.filePath, bitHeaders.newPic.buff, function(err){
      if(err) throw err;
    });
  });


//proper scaffolding
// repo
  //Lab-team-name
      //bmp-assets
        //bmp-files
      //lib
        //bit-headers.js
        //transform.js
        //modular-functionality.js
  //index.js

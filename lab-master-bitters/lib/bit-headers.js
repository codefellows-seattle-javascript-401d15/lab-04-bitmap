'use strict';

module.exports = exports = {};

const fs = require('fs');

const bmp = function(data){
  this.spec = data.toString('utf-8',0,2);
  this.size = data.readUInt32LE(2);
  this.offset = data.readUInt32LE(10);
  this.width = data.readUInt32LE(18);
  this.height = data.readUInt32LE(22);

  this.colorArray = data.slice(54, bmp.offset);
};

// let bitmapArray = [];

fs.readFile(`${__dirname}/../assets/bmp-files/bitmap.bmp`, function(err, data){
  if(err) throw err;
  let picture = data;
  let dataOne = new bmp (picture);

  // let colors = dataOne.colorArray.slice(0,12);
  // console.log(dataOne);
  // console.log(colors);
  console.log(dataOne.colorArray);
  // invert(dataOne);
  // greyScale(dataOne);
  scaleColor(dataOne, 1, 50);
  console.log(dataOne.colorArray);
  // console.log(inverted);

  fs.writeFile(`${__dirname}/../assets/bmp-files/newbitmap.bmp`,picture,function(err){
    if(err) throw err;
    data = dataOne;
    // console.log(data);
  });
});


function invert(bmp){
  // console.log(bmp.colorArray);
  for (let i =0; i < 1024; i += 4){
    for (let j =0; j < 3; j++){
      bmp.colorArray[i+j] = 255 - bmp.colorArray[i+j];
    }
  }
  // console.log(bmp.colorArray);
}

function greyScale(bmp){
  for (let i=0; i < 1024; i += 4){
    let avg = (bmp.colorArray[i] + bmp.colorArray[i+1] + bmp.colorArray[i+2])/3;
    bmp.colorArray[i] = avg;
    bmp.colorArray[i+1] = avg;
    bmp.colorArray[i+2] = avg;
  }
}

function scaleColor(bmp, colorNum, num){
  if (colorNum > 2) throw Error;
  for (let i = 0; i < 1024; i += 4){
    if (num + bmp.colorArray[i+colorNum] < 256){
      bmp.colorArray[i+colorNum] = num + bmp.colorArray[i+colorNum];
    }
  }
}

// function monoChrome(bitmap, err) {
//   if(err) throw new Error('Failed to change image to black and white');
//
//   let currentColor = [];
//   for (var i = 0; i < 1024; i += 4) {
//     currentColor = bitmap.colorArray.slice(i, i + 4);
//     let currentColorAverage = ((currentColor[0] + currentColor[1] + currentColor[2])/3);
//     currentColor[0] = currentColorAverage;
//     currentColor[1] = currentColorAverage;
//     currentColor[2] = currentColorAverage;
//     currentColor[3] = 0;
//   }
// }

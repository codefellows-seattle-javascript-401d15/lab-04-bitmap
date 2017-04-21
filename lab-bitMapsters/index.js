'use strict';

const fs = require('fs');
// const bitmap = fs.readFileSync(`${__dirname}/data/bitmap.bmp`);
const bitmap = `${__dirname}/data/bitmap.bmp`;

// const bmp = {};
//
// bmp.spec = bitmap.toString('utf-8', 0, 2);
// bmp.size = bitmap.readUInt32LE(2);
// bmp.width = bitmap.readUInt32LE(18);
// bmp.height = bitmap.readUInt32LE(22);
// bmp.offset = bitmap.readUInt32LE(10);
// bmp.colorArray = bitmap.slice(54, bmp.offset);
// bmp.colorTable = bitmap.slice(41, 44);

// console.log(bmp);
// console.log(bmp.colorArray);

function Bmp(data, name){
  this.name = name;
  this.spec = data.toString('utf-8', 0, 2);
  this.size = data.readUInt32LE(2);
  this.width = data.readUInt32LE(18);
  this.height = data.readUInt32LE(22);
  this.offset = data.readUInt32LE(10);
  this.colorArray = data.slice(54, this.offset);
  this.filePath = `${__dirname}/data/${this.name}.bmp`;
  this.buff = data;
  // bmp.colorTable = bitmap.slice(41, 44);
}

fs.readFile(bitmap, function(err, data){
  if(err) throw err;
  console.log(data);

  let newPic = new Bmp(data, 'wtfisthis');
  // let newData = data.toString('ascii');

  for(var i = 0; i < newPic.colorArray.length; i++) {
    var red = newPic.colorArray[i];
    red = Math.floor(Math.random() * 255);
  }

  console.log(newPic);

  fs.writeFile(newPic.filePath, newPic.buff, function(err){
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

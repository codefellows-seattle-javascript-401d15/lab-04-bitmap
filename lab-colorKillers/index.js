'use strict';

const writeFile = require('./lib/write-file.js');
const readFile = require('./lib/bmp-reader.js');

const pics = ['data/bitmap.bmp', 'data/finger-print.bmp', 'data/house.bmp', 'data/non-palette-bitmap.bmp'];
// const newPics = ['./output/bitmap1', './output/bitmap2', './output/bitmap3', './output/finger1', './output/finger2', 'output/finger3', 'output/house1', 'output/house2', 'output/house3', 'output/non1', 'output/non2', 'output/non3'];

for (var i = 0; i < pics.length; i++) {
  // for (var k = 0; k < newPics.length; k++) {

  readFile(pics[i], (err, data) => {
    if (err) throw err;
    data.invert();

    let radNum = Math.floor(Math.random()*1000);
    writeFile('./output/file'+ radNum +'.bmp', data, (err) => {
      if(err) throw err;
    });
  });

  readFile(pics[i], (err, data) => {
    if (err) throw err;
    let radNum = Math.floor(Math.random()*1000);
    writeFile('./output/file'+ radNum +'.bmp', data, (err) => {
      if(err) throw err;
    });
  });

  readFile(pics[i], (err, data) => {
    if (err) throw err;

    data.greyScale();

    let radNum = Math.floor(Math.random()*1000);

    writeFile('./output/file'+ radNum +'.bmp', data, (err) => {
      if(err) throw err;
    });
  });
}
// }

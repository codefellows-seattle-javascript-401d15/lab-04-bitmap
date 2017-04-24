'use strict';

const writeFile = require('./lib/write-file.js');
const readFile = require('./lib/bmp-reader.js');

const pics = ['data/bitmap.bmp'];
// 'data/finger-print.bmp', 'data/house.bmp', 'data/non-palette-bitmap.bmp'];


for (var i = 0; i < pics.length; i++) {

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
<<<<<<< HEAD

    data.changeColor();
    
=======
    data.changeColor();

>>>>>>> e5bb0a5783a84eb60b06cbf8647a6e37d989a341
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

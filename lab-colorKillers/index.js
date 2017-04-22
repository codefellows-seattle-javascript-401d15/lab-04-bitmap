'use strict';

const writeFile = require('./lib/write-file.js');
const readFile = require('./lib/bmp-reader.js');
// const constructor = require('./lib/constuct.js');


readFile('data/bitmap.bmp', (err, data) => {
  if (err) throw err;
  console.log(data);

  writeFile('./output/output.bmp', data, (err) => {
    if(err) throw err;
    console.log(data);
  });
});

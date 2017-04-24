'use strict';

const fs = require('fs');
const bitHeader = require('./bit-headers.js');
const transformer = require('./transform.js');

module.exports = function() {

  let fileArray = [`bitmap.bmp`, `finger-print.bmp`, `house.bmp`, `non-palette-bitmap.bmp`];

  for(let i=0; i < fileArray.length; i++) {

    fs.readFile(`${__dirname}/../assets/bmp-files/${fileArray[i]}`, function(err, data){
      if(err) throw err;
      let picture = data;
      let dataOne = new bitHeader.bmp (picture);

      // transformer.invert(dataOne);
      // transformer.greyScale(dataOne);
      transformer.scaleColor(dataOne, 1, 50);

      fs.writeFile(`${__dirname}/../assets/bmp-files/new${fileArray[i]}`,picture,function(err){
        if(err) throw err;
        data = dataOne;

      });
    });
  }
};

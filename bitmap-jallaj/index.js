'use strict';

const bitmapModule = require(`${__dirname}/lib/bitmap.js`);

bitmapModule.bitmap(function(exports){
  console.log(exports, 'exports');
});

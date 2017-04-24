# Team Rage
1. David Wheeler
2. Abigail White
3. Glen Pham

This application converts a bitmap file and transforms it’s colors. You can use the command line to specify what color filter you want to use and what filename to use.


### Color Filters
1. invertcolors : This command inverts the bitmap’s colors

2. monochrome : This command changes the bitmap to black and white

3. randomcolors : This command changes the bitmap’s colors to random

### Image Types
1. bmp - a bitmap filename
2. finger - a picture of a finger
3. house - a picture of a house
4. npb - a non pallette bitmap

### How to use
Instructions for usage from command terminal. ‘node index.js’ is the starting command, the second input will be a color from the Color Filters list, the third command is the filename you want, and the last command is the type of image you want to be transformed. s

```
node index.js (color method) (filename) (image type)
```

#### example
```
node index.js monochrome myimage house
```

This will create a new house image using the monochrome filter and name the file as myimage.bmp

#### Resources & Attributes
* Mocha
* Chai
* Reference Team Gnoevil: https://github.com/gnoevil/lab-04-bitmap/blob/lab-gnoevil/index.js

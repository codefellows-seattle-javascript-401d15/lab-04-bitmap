# Team Rage
1. David Wheeler
2. Abigail White
3. Glen Pham

This application converts a bitmap file and transforms it's colors. You can use the command line to specify what color filter you want to use and what filename to use.


###Color Filters
1. invertcolors : This command inverts the bitmap's colors

2. monochrome : This command changes the bitmap to black and white

3. randomcolors : This command changes the bitmap's colors to random


###How to use
Instructions for usage from command terminal. 'node index.js' is the starting command, the second input will be a color from the Color Filters list, and the last input will be any filename you wish to specify.

```
node index.js (color method) (filename)

```

####example
```
node index.js monochrome myimage
```

This will create a new image using the monochrome filter and name the file as myimage.bmp




```

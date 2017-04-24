Team Rage

David Wheeler
Abigail White
Glen Pham
This application converts a bitmap file and transforms it’s colors. You can use the command line to specify what color filter you want to use and what filename to use.

Color Filters

invertcolors : This command inverts the bitmap’s colors

monochrome : This command changes the bitmap to black and white

randomcolors : This command changes the bitmap’s colors to random

Image Types

bmp - a bitmap filename
finger - a picture of a finger
house - a picture of a house
npb - a non pallette bitmap
How to use

Instructions for usage from command terminal. ‘node index.js’ is the starting command, the second input will be a color from the Color Filters list, the third command is the filename you want, and the last command is the type of image you want to be transformed. s

node index.js (color method) (filename) (image type)
example

node index.js monochrome myimage house
This will create a new house image using the monochrome filter and name the file as myimage.bmp

Resources & Attributes

Mocha
Chai
Reference Team Gnoevil: https://github.com/gnoevil/lab-04-bitmap/blob/lab-gnoevil/index.js

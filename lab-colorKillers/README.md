# Lab-04
## Color Killers
### Disa, Kayla, Patrick




##Math

**Inverted Colors**

Buffer{10, 40, 10, 0 ....}
for(var i = 0; i> buffer.length; i++){
  new value = 255-(value at i)
}

**GreyScale**
Buffer{10, 40, 10, 0 ....}
x= 0.21R + 0.72G + 0.07B
 Push x to array 3 time
[x, x, x, 0] Using recusion

**Changing 1 Color**
Buffer{10, 40, 10, 0 ....}
for(var i = 2; i < length; i+4){
  new value = (value at i) X 0.5

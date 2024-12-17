# Challenge 04

**It's time to put up the Christmas tree at home!** 🎄 But this year we want it to be special. We're going to create a function that receives the height of the tree (a positive integer between 1 and 100) and a special character to decorate it.

The function should return a string that represents the Christmas tree, constructed as follows:

- The tree is made up of triangles of special characters.
- The spaces on the sides of the tree are represented with underscores \_.
- All trees have a trunk of two lines, represented by the # character.
- The tree should always have the same length on each side.
- You must ensure the tree has the correct shape using line breaks \n for each line.

> Make sure to use line breaks \n at the end of each line, **except for the last one**.

```js
const tree01 = createXmasTree(5, '*')
console.log(tree01)

// Expected result:
/*
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
*/

const tree02 = createXmasTree(3, '+')
console.log(tree02)

// Expected result:
/*
__+__
_+++_
+++++
__#__
__#__
*/

const tree03 = createXmasTree(6, '@')
console.log(tree03)

// Expected result:
/*
_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____
*/
```

### Solutions

- [Python](./solution.py)
- [JavaScript](./solution.js)
- [TypeScript](./solution.ts)

## Stars earned

![5 stars](../../.github/04-challenge-stars.png)

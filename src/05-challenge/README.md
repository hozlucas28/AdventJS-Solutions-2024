# Challenge 05

**Santa Claus's elves** 🧝🧝‍♂️ have found a bunch of mismatched magic boots in the workshop. Each boot is described by two values:

- `type` indicates if it's a left boot (I) or a right boot (R).
- `size` indicates the size of the boot.

Your task is to help the elves pair all the boots of the same size having a left and a right one. To do this, you should return a list of the available boots after pairing them.

> Note: You can have more than one pair of boots of the same size!

```js
const shoes01 = [
	{ type: 'I', size: 38 },
	{ type: 'R', size: 38 },
	{ type: 'R', size: 42 },
	{ type: 'I', size: 41 },
	{ type: 'I', size: 42 },
]

organizeShoes(shoes01)
// Expected result: [38, 42]

const shoes02 = [
	{ type: 'I', size: 38 },
	{ type: 'R', size: 38 },
	{ type: 'I', size: 38 },
	{ type: 'I', size: 38 },
	{ type: 'R', size: 38 },
]

organizeShoes(shoes02)
// Expected result: [38, 38]

const shoes03 = [
	{ type: 'I', size: 38 },
	{ type: 'R', size: 36 },
	{ type: 'R', size: 42 },
	{ type: 'I', size: 41 },
	{ type: 'I', size: 43 },
]

organizeShoes(shoes03)
// Expected result: []
```

### Solutions

- [Python](./solution.py)
- [JavaScript](./solution.js)
- [TypeScript](./solution.ts)

## Stars earned

![5 stars](../../.github/05-challenge-stars.png)

# Challenge 24

At the North Pole, the elves have **two magical binary trees that generate energy** 🌲🌲 to keep the Christmas star ⭐️ shining. However, for them to work properly, the trees must be in perfect sync **like mirrors**.

**Two binary trees are mirrors if:**

- The roots of both trees have the same value.
- Each node of the first tree must have its corresponding node in the opposite position in the second tree.

And the tree is represented with three properties `value`, `left`, and `right`. The latter two display the remaining branches (if any):

```js
const tree = {
	value: '⭐️',
	left: {
		value: '🎅',
		// left: {...}
		// right: { ... }
	},
	right: {
		value: '🎁',
		// left: { ... }
		// right: { ... }
	},
}
```

Santa needs your help to verify if the trees are synchronized so that the star can keep shining. **You must return an array where the first position indicates if the trees are synchronized and the second position returns the value of the root of the first tree**.

```js
const tree01 = {
	value: '🎄',
	left: { value: '⭐' },
	right: { value: '🎅' },
}

/*
  tree01
   🎄
  / \
⭐  🎅
*/

const tree02 = {
	value: '🎄',
	left: { value: '🎅' },
	right: { value: '⭐' },
}

/*
  tree02
   🎄
  / \
🎅  ⭐
*/

const tree03 = {
	value: '🎄',
	left: { value: '🎅' },
	right: { value: '🎁' },
}

/*
  tree03
   🎄
  / \
🎅  🎁
*/

const tree04 = {
	value: '🎄',
	left: { value: '⭐' },
	right: { value: '🎅' },
}

/*
  tree03
   🎄
  / \
⭐  🎅
*/

isTreesSynchronized(tree01, tree02) // Expected result: [true, '🎄']

isTreesSynchronized(tree01, tree03) // Expected result: [false, '🎄']

isTreesSynchronized(tree01, tree04) // Expected result: [false, '🎄']

isTreesSynchronized({ value: '🎅' }, { value: '🧑‍🎄' }) // Expected result: [false, '🎅']
```

### Solutions

- [Python](./solution.py)
- [JavaScript](./solution.js)
- [TypeScript](./solution.ts)

## Stars earned

![5 stars](../../.github/24-challenge-stars.png)

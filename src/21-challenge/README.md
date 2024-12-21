# Challenge 21

Santa Claus 🎅 is decorating a magical Christmas tree, which this year has a special structure in the form of a **binary tree**. Each node of the tree represents a gift, and Santa wants to know the **height of the tree** to place the magical star at the top.

Your task is to write a function that calculates the height of a binary tree. The height of a binary tree is defined as the maximum number of levels from the root to a leaf. An empty tree has a height of `0`.

```js
const tree = {
	value: '🎁',
	left: {
		value: '🎄',
		left: {
			value: '⭐',
			left: null,
			right: null,
		},
		right: {
			value: '🎅',
			left: null,
			right: null,
		},
	},
	right: {
		value: '❄️',
		left: null,
		right: {
			value: '🦌',
			left: null,
			right: null,
		},
	},
}

// Graphical representation of the tree...
//
//        🎁
//       /   \
//     🎄     ❄️
//    /  \      \
//  ⭐   🎅      🦌

treeHeight(tree) // Expected result: 3
```

### Solutions

- [Python](./solution.py)
- [JavaScript](./solution.js)
- [TypeScript](./solution.ts)

## Stars earned

![5 stars](../../.github/21-challenge-stars.png)

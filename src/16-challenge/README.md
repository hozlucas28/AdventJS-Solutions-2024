# Challenge 16

The elves are working hard to clear paths filled with magical snow ❄️. This snow has a special property: if two **identical and adjacent** snow piles are found, they **disappear automatically**.

Your task is to write a function to help the elves simulate this process. **The path is represented by a string and each snow pile by a character**.

You need to remove all adjacent snow piles that are the same **until no more moves are possible**.

The result should be the final path after removing all duplicate piles

```js
removeSnow('zxxzoz')
/**
 * Expected result: "oz"
 *
 * 1 - Remove "xx", resulting in "zzoz".
 * 2 - Remove "zz", resulting in "oz".
 */

removeSnow('abcdd')
/**
 * Expected result: "abc"
 *
 * 1 - Remove "dd", resulting in "abc".
 */

removeSnow('zzz')
/**
 * Expected result: "z"
 *
 * 1 - Remove "zz", resulting in "z"
 */

removeSnow('a')
/**
 * Expected result: "a"
 *
 * 1 - No duplicate piles.
 */
```

### Solutions

- [Python](./solution.py)
- [JavaScript](./solution.js)
- [TypeScript](./solution.ts)

## Stars earned

![5 stars](../../.github/16-challenge-stars.png)

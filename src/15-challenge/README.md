# Challenge 15

**ChatGPT has arrived at the North Pole** and the elf _Sam Elfman_ is working on an application for managing gifts and children.

To enhance the presentation, he wants to create a function `drawTable` that receives an array of objects and converts it into a text table.

The drawn table should represent the object data as follows:

- It has a header with the column name.
- The column name has the **first letter capitalized**.
- Each row should contain the values of the objects in the corresponding order.
- Each value must be left-aligned.
- Fields always leave a space on the left.
- Fields leave the necessary space on the right to align the box.

```js
drawTable([
	{ name: 'Alice', city: 'London' },
	{ name: 'Bob', city: 'Paris' },
	{ name: 'Charlie', city: 'New York' },
])

// Expected result:
/** +---------+-----------+
 *  | Name    | City      |
 *  +---------+-----------+
 *  | Alice   | London    |
 *  | Bob     | Paris     |
 *  | Charlie | New York  |
 *  +---------+-----------+
 */

drawTable([
	{ gift: 'Doll', quantity: 10 },
	{ gift: 'Book', quantity: 5 },
	{ gift: 'Music CD', quantity: 1 },
])

// Expected result:
/** +----------+----------+
 *  | Gift     | Quantity |
 *  +----------+----------+
 *  | Doll     | 10       |
 *  | Book     | 5        |
 *  | Music CD | 1        |
 *  +----------+----------+
 */
```

### Solutions

- [Python](./solution.py)
- [JavaScript](./solution.js)
- [TypeScript](./solution.ts)

## Stars earned

![5 stars](../../.github/15-challenge-stars.png)

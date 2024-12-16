import fn from './solution'

describe('Challenge 15: create a table based on an array with objects', () => {
	it('Test 01', () => {
		const result: string = fn([
			{ name: 'Alice', city: 'London' },
			{ name: 'Bob', city: 'Paris' },
			{ name: 'Charlie', city: 'New York' },
		])

		const expected: string =
			'+---------+----------+\n' +
			'| Name    | City     |\n' +
			'+---------+----------+\n' +
			'| Alice   | London   |\n' +
			'| Bob     | Paris    |\n' +
			'| Charlie | New York |\n' +
			'+---------+----------+'

		expect(result).toBe(expected)
	})

	it('Test 02', () => {
		const result: string = fn([
			{ gift: 'Doll', quantity: 10 },
			{ gift: 'Book', quantity: 5 },
			{ gift: 'Music CD', quantity: 1 },
		])

		const expected: string =
			'+----------+----------+\n' +
			'| Gift     | Quantity |\n' +
			'+----------+----------+\n' +
			'| Doll     | 10       |\n' +
			'| Book     | 5        |\n' +
			'| Music CD | 1        |\n' +
			'+----------+----------+'

		expect(result).toBe(expected)
	})
})

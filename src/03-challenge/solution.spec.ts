import type { Inventory } from './solution'
import fn from './solution'

describe('Challenge 03: return an object with the organized toys', () => {
	it('Test 01', () => {
		const inventory: Inventory = [
			{ name: 'doll', quantity: 5, category: 'toys' },
			{ name: 'car', quantity: 3, category: 'toys' },
			{ name: 'ball', quantity: 2, category: 'sports' },
			{ name: 'car', quantity: 2, category: 'toys' },
			{ name: 'racket', quantity: 4, category: 'sports' },
		]

		const result: object = fn(inventory)
		const expected: object = {
			toys: {
				doll: 5,
				car: 5,
			},
			sports: {
				ball: 2,
				racket: 4,
			},
		}

		expect(result).toStrictEqual(expected)
	})

	it('Test 02', () => {
		const inventory: Inventory = [
			{ name: 'book', quantity: 10, category: 'education' },
			{ name: 'book', quantity: 5, category: 'education' },
			{ name: 'paint', quantity: 3, category: 'art' },
		]

		const result: object = fn(inventory)
		const expected: object = {
			education: {
				book: 15,
			},
			art: {
				paint: 3,
			},
		}

		expect(result).toStrictEqual(expected)
	})
})

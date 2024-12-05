import type { Shoe } from './solution'
import fn from './solution'

describe('Challenge 05: return a list with the available pair of all boots with the same size (having a left and a right one)', () => {
	it('Test 01', () => {
		const shoes: Shoe[] = [
			{ type: 'I', size: 38 },
			{ type: 'R', size: 38 },
			{ type: 'R', size: 42 },
			{ type: 'I', size: 41 },
			{ type: 'I', size: 42 },
		]

		const result: number[] = fn(shoes)
		const expected: number[] = [38, 42]

		expect(result).toStrictEqual(expected)
	})

	it('Test 02', () => {
		const shoes: Shoe[] = [
			{ type: 'I', size: 38 },
			{ type: 'R', size: 38 },
			{ type: 'I', size: 38 },
			{ type: 'I', size: 38 },
			{ type: 'R', size: 38 },
		]

		const result: number[] = fn(shoes)
		const expected: number[] = [38, 38]

		expect(result).toStrictEqual(expected)
	})

	it('Test 03', () => {
		const shoes: Shoe[] = [
			{ type: 'I', size: 38 },
			{ type: 'R', size: 36 },
			{ type: 'R', size: 42 },
			{ type: 'I', size: 41 },
			{ type: 'I', size: 43 },
		]

		const result: number[] = fn(shoes)
		const expected: number[] = []

		expect(result).toStrictEqual(expected)
	})
})

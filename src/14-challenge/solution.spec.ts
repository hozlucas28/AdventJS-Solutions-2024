import fn from './solution'

describe('Challenge 14: get the minimum number of moves needed for all the reindeer to end up in a stable', () => {
	it('Test 01', () => {
		const result: number = fn([2, 6, 9], [3, 8, 5])
		const expected: number = 3
		expect(result).toBe(expected)
	})

	it('Test 02', () => {
		const result: number = fn([1, 1, 3], [1, 4, 8])
		const expected: number = 8
		expect(result).toBe(expected)
	})
})

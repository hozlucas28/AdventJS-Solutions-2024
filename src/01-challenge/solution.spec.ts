import fn from './solution'

describe('Challenge 01: return an array of unique gifts sorted in ascending order', () => {
	it('Test 01', () => {
		const gifts: number[] = [3, 1, 2, 3, 4, 2, 5]
		const result = fn(gifts)
		const expected = [1, 2, 3, 4, 5]
		expect(result).toStrictEqual(expected)
	})

	it('Test 02', () => {
		const gifts: number[] = [6, 5, 5, 5, 5]
		const result = fn(gifts)
		const expected = [5, 6]
		expect(result).toStrictEqual(expected)
	})

	it('Test 03', () => {
		const gifts: number[] = []
		const result = fn(gifts)
		const expected: number[] = []
		expect(result).toStrictEqual(expected)
	})
})

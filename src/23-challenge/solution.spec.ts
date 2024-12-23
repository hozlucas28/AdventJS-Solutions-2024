import fn from './solution'

describe('Challenge 23: find missing numbers', () => {
	it('Test 01', () => {
		const result: number[] = fn([1, 2, 4, 6])
		const expected: number[] = [3, 5]
		expect(result).toStrictEqual(expected)
	})

	it('Test 02', () => {
		const result: number[] = fn([4, 8, 7, 2])
		const expected: number[] = [1, 3, 5, 6]
		expect(result).toStrictEqual(expected)
	})

	it('Test 03', () => {
		const result: number[] = fn([3, 2, 1, 1])
		const expected: number[] = []
		expect(result).toStrictEqual(expected)
	})

	it('Test 04', () => {
		const result: number[] = fn([5, 5, 5, 3, 3, 2, 1])
		const expected: number[] = [4]
		expect(result).toStrictEqual(expected)
	})

	it('Test 05', () => {
		const result: number[] = fn([1, 2, 3, 4, 5])
		const expected: number[] = []
		expect(result).toStrictEqual(expected)
	})
})

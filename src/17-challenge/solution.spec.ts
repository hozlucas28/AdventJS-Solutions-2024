import fn from './solution'

describe('Challenge 17: get how many explosive coal bombs are in the adjacent positions', () => {
	it('Test 01', () => {
		const result: number[][] = fn([
			[true, false, false],
			[false, true, false],
			[false, false, false],
		])

		const expected: number[][] = [
			[1, 2, 1],
			[2, 1, 1],
			[1, 1, 1],
		]

		expect(result).toStrictEqual(expected)
	})

	it('Test 02', () => {
		const result: number[][] = fn([
			[true, false],
			[false, false],
		])

		const expected: number[][] = [
			[0, 1],
			[1, 1],
		]

		expect(result).toStrictEqual(expected)
	})

	it('Test 03', () => {
		const result: number[][] = fn([
			[true, true],
			[false, false],
			[true, true],
		])

		const expected: number[][] = [
			[1, 1],
			[4, 4],
			[1, 1],
		]

		expect(result).toStrictEqual(expected)
	})
})

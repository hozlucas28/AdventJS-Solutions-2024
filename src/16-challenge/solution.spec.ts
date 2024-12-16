import fn from './solution'

describe('Challenge 16: remove all adjacent snow piles from the path', () => {
	it('Test 01', () => {
		const result: string = fn('zxxzoz')
		const expected: string = 'oz'
		expect(result).toBe(expected)
	})

	it('Test 02', () => {
		const result: string = fn('abcdd')
		const expected: string = 'abc'
		expect(result).toBe(expected)
	})

	it('Test 03', () => {
		const result: string = fn('zzz')
		const expected: string = 'z'
		expect(result).toBe(expected)
	})

	it('Test 04', () => {
		const result: string = fn('a')
		const expected: string = 'a'
		expect(result).toBe(expected)
	})
})

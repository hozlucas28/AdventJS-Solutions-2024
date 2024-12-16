import fn from './solution'

describe('Challenge 12: calculate the total price of the tree by ornaments', () => {
	it('Test 01', () => {
		const result: number | undefined = fn('***')
		const expected: number | undefined = 3
		expect(result).toBe(expected)
	})

	it('Test 02', () => {
		const result: number | undefined = fn('*o')
		const expected: number | undefined = 4
		expect(result).toBe(expected)
	})

	it('Test 03', () => {
		const result: number | undefined = fn('o*')
		const expected: number | undefined = 6
		expect(result).toBe(expected)
	})

	it('Test 04', () => {
		const result: number | undefined = fn('*o*')
		const expected: number | undefined = 5
		expect(result).toBe(expected)
	})

	it('Test 05', () => {
		const result: number | undefined = fn('**o*')
		const expected: number | undefined = 6
		expect(result).toBe(expected)
	})

	it('Test 06', () => {
		const result: number | undefined = fn('o***')
		const expected: number | undefined = 8
		expect(result).toBe(expected)
	})

	it('Test 07', () => {
		const result: number | undefined = fn('*o@')
		const expected: number | undefined = 94
		expect(result).toBe(expected)
	})

	it('Test 08', () => {
		const result: number | undefined = fn('*#')
		const expected: number | undefined = 49
		expect(result).toBe(expected)
	})

	it('Test 09', () => {
		const result: number | undefined = fn('@@@')
		const expected: number | undefined = 300
		expect(result).toBe(expected)
	})

	it('Test 10', () => {
		const result: number | undefined = fn('#@')
		const expected: number | undefined = 50
		expect(result).toBe(expected)
	})

	it('Test 11', () => {
		const result: number | undefined = fn('#@Z')
		const expected: number | undefined = undefined
		expect(result).toBe(expected)
	})
})

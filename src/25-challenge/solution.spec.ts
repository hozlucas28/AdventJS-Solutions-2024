import fn from './solution'

describe('Challenge 25: return the value of the program after executing instructions sequence', () => {
	it('Test 01', () => {
		const result: number = fn('+++')
		const expected: number = 3
		expect(result).toBe(expected)
	})

	it('Test 02', () => {
		const result: number = fn('+--')
		const expected: number = -1
		expect(result).toBe(expected)
	})

	it('Test 03', () => {
		const result: number = fn('>+++[-]')
		const expected: number = 0
		expect(result).toBe(expected)
	})

	it('Test 04', () => {
		const result: number = fn('>>>+{++}')
		const expected: number = 3
		expect(result).toBe(expected)
	})

	it('Test 05', () => {
		const result: number = fn('+{[-]+}+')
		const expected: number = 2
		expect(result).toBe(expected)
	})

	it('Test 06', () => {
		const result: number = fn('{+}{+}{+}')
		const expected: number = 0
		expect(result).toBe(expected)
	})

	it('Test 07', () => {
		const result: number = fn('------[+]++')
		const expected: number = 2
		expect(result).toBe(expected)
	})

	it('Test 08', () => {
		const result: number = fn('-[++{-}]+{++++}')
		const expected: number = 5
		expect(result).toBe(expected)
	})
})

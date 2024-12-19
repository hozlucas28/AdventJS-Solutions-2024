import fn from './solution'

describe('Challenge 19: draw a tower with the minimum number of boxes for a specific weight', () => {
	it('Test 01', () => {
		const result: string = fn(1)
		const expected: string = ' _ \n' + '|_|'
		expect(result).toBe(expected)
	})

	it('Test 02', () => {
		const result: string = fn(2)
		const expected: string = ' ___ \n' + '|___|'
		expect(result).toBe(expected)
	})

	it('Test 03', () => {
		const result: string = fn(3)
		const expected: string = ' _ \n' + '|_|_\n' + '|___|'
		expect(result).toBe(expected)
	})

	it('Test 04', () => {
		const result: string = fn(4)
		const expected: string = ' ___ \n' + '|___|\n' + '|___|'
		expect(result).toBe(expected)
	})

	it('Test 05', () => {
		const result: string = fn(5)
		const expected: string = ' _____ \n' + '|     |\n' + '|_____|'
		expect(result).toBe(expected)
	})

	it('Test 06', () => {
		const result: string = fn(6)
		const expected: string = ' _ \n' + '|_|___\n' + '|     |\n' + '|_____|'
		expect(result).toBe(expected)
	})
})

import fn from './solution'

describe('Challenge 06: check if the present is inside the box', () => {
	it('Test 01', () => {
		const result: boolean = fn(['###', '#*#', '###'])
		const expected: boolean = true

		expect(result).toBe(expected)
	})

	it('Test 02', () => {
		const result: boolean = fn(['####', '#* #', '#  #', '####'])
		const expected: boolean = true

		expect(result).toBe(expected)
	})

	it('Test 03', () => {
		const result: boolean = fn(['*####', '#   #', '#  #*', '####'])
		const expected: boolean = false

		expect(result).toBe(expected)
	})

	it('Test 04', () => {
		const result: boolean = fn(['#####', '#   #', '#   #', '#   #', '#####'])
		const expected: boolean = false

		expect(result).toBe(expected)
	})
})

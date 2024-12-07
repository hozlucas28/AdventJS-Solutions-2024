import fn from './solution'

describe('Challenge 07: reorder the packages changed in order to fix the Grinch evil', () => {
	it('Test 01', () => {
		const result: string = fn('a(cb)de')
		const expected: string = 'abcde'
		expect(result).toBe(expected)
	})

	it('Test 02', () => {
		const result: string = fn('a(bc(def)g)h')
		const expected: string = 'agdefcbh'
		expect(result).toBe(expected)
	})

	it('Test 03', () => {
		const result: string = fn('abc(def(gh)i)jk')
		const expected: string = 'abcighfedjk'
		expect(result).toBe(expected)
	})

	it('Test 04', () => {
		const result: string = fn('a(b(c))e')
		const expected: string = 'acbe'
		expect(result).toBe(expected)
	})
})

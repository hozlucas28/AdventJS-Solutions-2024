import fn from './solution'

describe('Challenge 02: return a string with the names of good child', () => {
	it('Test 01', () => {
		const result: string = fn(['midu', 'madeval', 'educalvolpz'])
		const expected: string =
			'***************\n' + '* midu        *\n' + '* madeval     *\n' + '* educalvolpz *\n' + '***************'

		expect(result).toBe(expected)
	})

	it('Test 02', () => {
		const result: string = fn(['midu'])
		const expected: string = '********\n' + '* midu *\n' + '********'

		expect(result).toBe(expected)
	})

	it('Test 03', () => {
		const result: string = fn(['a', 'bb', 'ccc'])
		const expected: string = '*******\n' + '* a   *\n' + '* bb  *\n' + '* ccc *\n' + '*******'

		expect(result).toBe(expected)
	})

	it('Test 04', () => {
		const result: string = fn(['a', 'bb', 'ccc', 'dddd'])
		const expected: string = '********\n' + '* a    *\n' + '* bb   *\n' + '* ccc  *\n' + '* dddd *\n' + '********'

		expect(result).toBe(expected)
	})
})

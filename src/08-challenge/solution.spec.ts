import fn from './solution'

describe('Challenge 08: get the progress of each reindeer in the snow track', () => {
	it('Test 01', () => {
		const result: string = fn([0, 5, -3], 10)
		const expected: string = '  ~~~~~~~~~~ /1\n' + ' ~~~~~r~~~~ /2\n' + '~~~~~~~r~~ /3'

		expect(result).toBe(expected)
	})

	it('Test 02', () => {
		const result: string = fn([2, -1, 0, 5], 8)
		const expected: string = '   ~~r~~~~~ /1\n' + '  ~~~~~~~r /2\n' + ' ~~~~~~~~ /3\n' + '~~~~~r~~ /4'

		expect(result).toBe(expected)
	})

	it('Test 03', () => {
		const result: string = fn([3, 7, -2], 12)
		const expected: string = '  ~~~r~~~~~~~~ /1\n' + ' ~~~~~~~r~~~~ /2\n' + '~~~~~~~~~~r~ /3'

		expect(result).toBe(expected)
	})
})

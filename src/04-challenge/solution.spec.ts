import fn from './solution'

describe('Challenge 01: construct a christmas tree with the desired height', () => {
	it('Test 01', () => {
		const result: string = fn(5, '*')
		const expected: string =
			'____*____\n' + '___***___\n' + '__*****__\n' + '_*******_\n' + '*********\n' + '____#____\n' + '____#____'

		expect(result).toBe(expected)
	})

	it('Test 02', () => {
		const result: string = fn(3, '+')
		const expected: string = '__+__\n' + '_+++_\n' + '+++++\n' + '__#__\n' + '__#__'

		expect(result).toBe(expected)
	})

	it('Test 03', () => {
		const result: string = fn(6, '@')
		const expected: string =
			'_____@_____\n' +
			'____@@@____\n' +
			'___@@@@@___\n' +
			'__@@@@@@@__\n' +
			'_@@@@@@@@@_\n' +
			'@@@@@@@@@@@\n' +
			'_____#_____\n' +
			'_____#_____'

		expect(result).toBe(expected)
	})
})

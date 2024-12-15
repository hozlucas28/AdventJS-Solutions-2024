import fn from './solution'

describe('Challenge 11: decode file names coded by the Grinch', () => {
	it('Test 01', () => {
		const result: string = fn('2023122512345678_sleighDesign.png.grinchwa')
		const expected: string = 'sleighDesign.png'
		expect(result).toBe(expected)
	})

	it('Test 02', () => {
		const result: string = fn('42_chimney_dimensions.pdf.hack2023')
		const expected: string = 'chimney_dimensions.pdf'
		expect(result).toBe(expected)
	})

	it('Test 03', () => {
		const result: string = fn('987654321_elf-roster.csv.tempfile')
		const expected: string = 'elf-roster.csv'
		expect(result).toBe(expected)
	})
})

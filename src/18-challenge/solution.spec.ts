import fn, { type ChildData } from './solution'

describe('Challenge 18: get the name and address of the child inside the misformatted diary', () => {
	it('Test 01', () => {
		const agenda =
			'+34-600-123-456 Calle Gran Via 12 <Juan Perez>\n' +
			'Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654\n' +
			'<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York'

		const result: ChildData | null = fn(agenda, '34-600-123-456')
		const expected: ChildData = { name: 'Juan Perez', address: 'Calle Gran Via 12' }

		expect(result).toStrictEqual(expected)
	})

	it('Test 02', () => {
		const agenda =
			'+34-600-123-456 Calle Gran Via 12 <Juan Perez>\n' +
			'Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654\n' +
			'<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York'

		const result: ChildData | null = fn(agenda, '600-987')
		const expected: ChildData = { name: 'Maria Gomez', address: 'Plaza Mayor 45 Madrid 28013' }

		expect(result).toStrictEqual(expected)
	})

	it('Test 03', () => {
		const agenda =
			'+34-600-123-456 Calle Gran Via 12 <Juan Perez>\n' +
			'Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654\n' +
			'<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York'

		const result: ChildData | null = fn(agenda, '111')
		const expected: null = null

		expect(result).toStrictEqual(expected)
	})

	it('Test 04', () => {
		const agenda =
			'+34-600-123-456 Calle Gran Via 12 <Juan Perez>\n' +
			'Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654\n' +
			'<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York'

		const result: ChildData | null = fn(agenda, '1')
		const expected: null = null

		expect(result).toStrictEqual(expected)
	})
})

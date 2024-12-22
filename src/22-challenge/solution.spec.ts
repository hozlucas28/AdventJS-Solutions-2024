import fn from './solution'

describe('Challenge 22: get all possible combinations of toys', () => {
	it('Test 01', () => {
		const result: string[][] = fn(['car', 'doll', 'puzzle'])
		const expected: string[][] = [
			['car'],
			['doll'],
			['puzzle'],
			['car', 'doll'],
			['car', 'puzzle'],
			['doll', 'puzzle'],
			['car', 'doll', 'puzzle'],
		]

		expect(result).toStrictEqual(expected)
	})

	it('Test 02', () => {
		const result: string[][] = fn(['ball'])
		const expected: string[][] = [['ball']]

		expect(result).toStrictEqual(expected)
	})

	it('Test 03', () => {
		const result: string[][] = fn(['game', 'pc'])
		const expected: string[][] = [['game'], ['pc'], ['game', 'pc']]

		expect(result).toStrictEqual(expected)
	})

	it('Test 04', () => {
		const result: string[][] = fn(['apple', 'banana', 'cherry', 'date'])
		const expected: string[][] = [
			['apple'],
			['banana'],
			['cherry'],
			['date'],
			['apple', 'banana'],
			['apple', 'cherry'],
			['apple', 'date'],
			['banana', 'cherry'],
			['banana', 'date'],
			['cherry', 'date'],
			['apple', 'banana', 'cherry'],
			['apple', 'banana', 'date'],
			['apple', 'cherry', 'date'],
			['banana', 'cherry', 'date'],
			['apple', 'banana', 'cherry', 'date'],
		]

		expect(result).toStrictEqual(expected)
	})

	it('Test 05', () => {
		const result: string[][] = fn(['pen', 'notebook', 'eraser', 'pencil', 'marker'])
		const expected: string[][] = [
			['pen'],
			['notebook'],
			['eraser'],
			['pencil'],
			['marker'],
			['pen', 'notebook'],
			['pen', 'eraser'],
			['pen', 'pencil'],
			['pen', 'marker'],
			['notebook', 'eraser'],
			['notebook', 'pencil'],
			['notebook', 'marker'],
			['eraser', 'pencil'],
			['eraser', 'marker'],
			['pencil', 'marker'],
			['pen', 'notebook', 'eraser'],
			['pen', 'notebook', 'pencil'],
			['pen', 'notebook', 'marker'],
			['pen', 'eraser', 'pencil'],
			['pen', 'eraser', 'marker'],
			['pen', 'pencil', 'marker'],
			['notebook', 'eraser', 'pencil'],
			['notebook', 'eraser', 'marker'],
			['notebook', 'pencil', 'marker'],
			['eraser', 'pencil', 'marker'],
			['pen', 'notebook', 'eraser', 'pencil'],
			['pen', 'notebook', 'eraser', 'marker'],
			['pen', 'notebook', 'pencil', 'marker'],
			['pen', 'eraser', 'pencil', 'marker'],
			['notebook', 'eraser', 'pencil', 'marker'],
			['pen', 'notebook', 'eraser', 'pencil', 'marker'],
		]

		expect(result).toStrictEqual(expected)
	})
})

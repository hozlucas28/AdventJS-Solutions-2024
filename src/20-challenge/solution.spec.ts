import fn from './solution'

describe('Challenge 20: return an object with the missing and extra gifts', () => {
	it('Test 01', () => {
		const result = fn(['puzzle', 'car', 'doll', 'car'], ['car', 'puzzle', 'doll', 'ball'])
		const expected = {
			missing: { ball: 1 },
			extra: { car: 1 },
		}

		expect(result).toStrictEqual(expected)
	})

	it('Test 02', () => {
		const result = fn(['book', 'train', 'kite', 'train'], ['train', 'book', 'kite', 'ball', 'kite'])
		const expected = {
			missing: { ball: 1, kite: 1 },
			extra: { train: 1 },
		}

		expect(result).toStrictEqual(expected)
	})

	it('Test 03', () => {
		const result = fn(['bear', 'bear', 'car'], ['bear', 'car', 'puzzle', 'bear', 'car', 'car'])
		const expected = {
			missing: { puzzle: 1, car: 2 },
			extra: {},
		}

		expect(result).toStrictEqual(expected)
	})

	it('Test 04', () => {
		const result = fn(['bear', 'bear', 'car'], ['car', 'bear', 'bear'])
		const expected = {
			missing: {},
			extra: {},
		}

		expect(result).toStrictEqual(expected)
	})
})

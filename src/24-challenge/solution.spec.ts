import fn from './solution'

describe('Challenge 24: check if the trees are synchronized', () => {
	it('Test 01', () => {
		const tree01 = {
			value: '🎄',
			left: { value: '⭐' },
			right: { value: '🎅' },
		}

		const tree02 = {
			value: '🎄',
			left: { value: '🎅' },
			right: { value: '⭐' },
		}

		const result: [boolean, string] = fn(tree01, tree02)
		const expected: [boolean, string] = [true, '🎄']

		expect(result).toStrictEqual(expected)
	})

	it('Test 02', () => {
		const tree01 = {
			value: '🎄',
			left: { value: '⭐' },
			right: { value: '🎅' },
		}

		const tree03 = {
			value: '🎄',
			left: { value: '🎅' },
			right: { value: '🎁' },
		}

		const result: [boolean, string] = fn(tree01, tree03)
		const expected: [boolean, string] = [false, '🎄']

		expect(result).toStrictEqual(expected)
	})

	it('Test 03', () => {
		const tree01 = {
			value: '🎄',
			left: { value: '⭐' },
			right: { value: '🎅' },
		}

		const tree04 = {
			value: '🎄',
			left: { value: '⭐' },
			right: { value: '🎅' },
		}

		const result: [boolean, string] = fn(tree01, tree04)
		const expected: [boolean, string] = [false, '🎄']

		expect(result).toStrictEqual(expected)
	})

	it('Test 04', () => {
		const result: [boolean, string] = fn({ value: '🎅' }, { value: '🧑‍🎄' })
		const expected: [boolean, string] = [false, '🎅']

		expect(result).toStrictEqual(expected)
	})
})

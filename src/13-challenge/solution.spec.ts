import fn from './solution'

describe('Challenge 13: check if the robot (after executing a series of movements) return to his original position', () => {
	it('Test 01', () => {
		const result: boolean | [number, number] = fn('R')
		const expected: [number, number] = [1, 0]
		expect(result).toStrictEqual(expected)
	})

	it('Test 02', () => {
		const result: boolean | [number, number] = fn('RL')
		const expected: boolean = true
		expect(result).toStrictEqual(expected)
	})

	it('Test 03', () => {
		const result: boolean | [number, number] = fn('RLUD')
		const expected: boolean = true
		expect(result).toStrictEqual(expected)
	})

	it('Test 04', () => {
		const result: boolean | [number, number] = fn('*RU')
		const expected: [number, number] = [2, 1]
		expect(result).toStrictEqual(expected)
	})

	it('Test 05', () => {
		const result: boolean | [number, number] = fn('R*U')
		const expected: [number, number] = [1, 2]
		expect(result).toStrictEqual(expected)
	})

	it('Test 06', () => {
		const result: boolean | [number, number] = fn('LLL!R')
		const expected: [number, number] = [-4, 0]
		expect(result).toStrictEqual(expected)
	})

	it('Test 07', () => {
		const result: boolean | [number, number] = fn('R?R')
		const expected: [number, number] = [1, 0]
		expect(result).toStrictEqual(expected)
	})

	it('Test 08', () => {
		const result: boolean | [number, number] = fn('U?D')
		const expected: boolean = true
		expect(result).toStrictEqual(expected)
	})

	it('Test 09', () => {
		const result: boolean | [number, number] = fn('R!L')
		const expected: [number, number] = [2, 0]
		expect(result).toStrictEqual(expected)
	})

	it('Test 10', () => {
		const result: boolean | [number, number] = fn('U!D')
		const expected: [number, number] = [0, 2]
		expect(result).toStrictEqual(expected)
	})

	it('Test 11', () => {
		const result: boolean | [number, number] = fn('R?L')
		const expected: boolean = true
		expect(result).toStrictEqual(expected)
	})

	it('Test 12', () => {
		const result: boolean | [number, number] = fn('U?U')
		const expected: [number, number] = [0, 1]
		expect(result).toStrictEqual(expected)
	})

	it('Test 13', () => {
		const result: boolean | [number, number] = fn('*U?U')
		const expected: [number, number] = [0, 2]
		expect(result).toStrictEqual(expected)
	})

	it('Test 14', () => {
		const result: boolean | [number, number] = fn('U?D?U')
		const expected: boolean = true
		expect(result).toStrictEqual(expected)
	})

	it('Test 15', () => {
		const result: boolean | [number, number] = fn('R!U?U')
		const expected: [number, number] = [1, 0]
		expect(result).toStrictEqual(expected)
	})

	it('Test 16', () => {
		const result: boolean | [number, number] = fn('UU!U?D')
		const expected: [number, number] = [0, 1]
		expect(result).toStrictEqual(expected)
	})
})

import type { Result } from './solution'
import fn from './solution'

describe('Challenge 09: return the train action in the next step inside or out the board', () => {
	it('Test 01', () => {
		const board = ['·····', '*····', '@····', 'o····', 'o····']

		const result: Result = fn(board, 'U')
		const expected: Result = 'eat'

		expect(result).toBe(expected)
	})

	it('Test 02', () => {
		const board = ['·····', '*····', '@····', 'o····', 'o····']

		const result: Result = fn(board, 'D')
		const expected: Result = 'crash'

		expect(result).toBe(expected)
	})

	it('Test 03', () => {
		const board = ['·····', '*····', '@····', 'o····', 'o····']

		const result: Result = fn(board, 'L')
		const expected: Result = 'crash'

		expect(result).toBe(expected)
	})

	it('Test 04', () => {
		const board = ['·····', '*····', '@····', 'o····', 'o····']

		const result: Result = fn(board, 'R')
		const expected: Result = 'none'

		expect(result).toBe(expected)
	})
})

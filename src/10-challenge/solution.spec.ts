import fn from './solution'

describe('Challenge 10: create a compiler of instructions', () => {
	it('Test 01', () => {
		const instructions = ['MOV -1 C', 'INC C', 'JMP C 1', 'MOV C A', 'INC A']

		const result: number = fn(instructions)
		const expected: number = 2

		expect(result).toBe(expected)
	})
})

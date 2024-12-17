/**
 * @param {string[]} instructions - The instructions to execute
 * @returns {number} The value of the register A
 */
export default function compile(instructions) {
	/** @type {{}} */
	const records = {}

	/** @type {Object.<'DEC' | 'INC' | 'MOV', (args: string) => void>} */
	const actions = {
		DEC: (args) => (records[args] = ~~records[args] - 1),
		INC: (args) => (records[args] = ~~records[args] + 1),

		MOV: (args) => {
			/** @type {RegExpMatchArray | null} */
			const match = args.match(/(-?\d+|\D) (\D)/)
			if (!match) return

			const [_, value, dest] = match
			records[dest] = value.match(/\D/) ? records[value] ?? 0 : parseInt(value)
		},
	}

	for (let i = 0; i < instructions.length; i++) {
		/** @type {string} */
		const instruction = instructions[i]

		/** @type {string} */
		const instructionAction = instruction.slice(0, 3)

		/** @type {string} */
		const instructionArgs = instruction.slice(4)

		if (instructionAction === 'JMP') {
			/** @type {RegExpMatchArray | null} */
			const match = instructionArgs.match(/(\D) (\d+)/)
			if (!match) continue

			const [_, record, newI] = match
			i = !records[record] ? parseInt(newI) - 1 : i
			continue
		}

		if (actions[instructionAction]) {
			actions[instructionAction](instructionArgs)
		}
	}

	return records['A']
}

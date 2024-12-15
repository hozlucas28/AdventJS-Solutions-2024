type Instruction = 'DEC' | 'INC' | 'MOV' | 'JMP'

export default function compile(instructions: string[]): number {
	const records: Record<string, number> = {}

	const actions: Record<Exclude<Instruction, 'JMP'>, (args: string) => void> = {
		DEC: (args: string) => (records[args] = ~~records[args] - 1),
		INC: (args: string) => (records[args] = ~~records[args] + 1),

		MOV: (args: string) => {
			const match: RegExpMatchArray | null = args.match(/(-?\d+|\D) (\D)/)
			if (!match) return

			const [_, value, dest] = match
			records[dest] = value.match(/\D/) ? records[value] ?? 0 : parseInt(value)
		},
	}

	for (let i = 0; i < instructions.length; i++) {
		const instruction: string = instructions[i]
		const instructionAction: Instruction = instruction.slice(0, 3) as Instruction
		const instructionArgs: string = instruction.slice(4)

		if (instructionAction === 'JMP') {
			const match: RegExpMatchArray | null = instructionArgs.match(/(\D) (\d+)/)
			if (!match) continue

			const [_, record, newI] = match
			i = !records[record] ? parseInt(newI) - 1 : i
			continue
		}

		if (actions[instructionAction]) actions[instructionAction](instructionArgs)
	}

	return records['A']
}

type Instruction = '-' | '+' | '>' | '[' | ']' | '{' | '}'

export default function execute(code: string): number {
	let result: number = 0

	for (let i = 0; i < code.length; i++) {
		const instruction: Instruction = code[i] as Instruction

		switch (instruction) {
			case '+':
				result++
				break

			case '-':
				result--
				break

			case '[':
				result = 0
				i = code.indexOf(']', i)
				break

			case '{':
				if (!result) i = code.indexOf('}', i)
				break
		}
	}

	return result
}

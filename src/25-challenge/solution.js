/**
 * @typedef {'-' | '+' | '>' | '[' | ']' | '{' | '}'} Instruction
 */

/**
 * @param {string} code - The magical program to execute
 * @returns {number} - The final value after executing the program
 */
export default function execute(code) {
	/** @type {number} */
	let result = 0

	for (let i = 0; i < code.length; i++) {
		const instruction = /** @type {Instruction} */ (code[i])

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

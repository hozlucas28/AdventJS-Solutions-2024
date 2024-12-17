/**
 * @param {string[]} names
 * @returns {string}
 */
export default function createFrame(names) {
	/** @type {string} */
	let frame

	/** @type {number} */
	let longestName = 0

	for (const name of names) {
		if (name.length > longestName) longestName = name.length
	}

	frame = '*'.repeat(longestName + 4) + '\n'
	for (const name of names) frame += `* ${name.padEnd(longestName, ' ')} *\n`
	frame += '*'.repeat(longestName + 4)

	return frame
}

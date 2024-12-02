export default function createFrame(names: string[]): string {
	let frame: string
	let longestName: number = 0

	for (const name of names) {
		if (name.length > longestName) longestName = name.length
	}

	frame = '*'.repeat(longestName + 4) + '\n'
	for (const name of names) frame += `* ${name.padEnd(longestName, ' ')} *\n`
	frame += '*'.repeat(longestName + 4)

	return frame
}

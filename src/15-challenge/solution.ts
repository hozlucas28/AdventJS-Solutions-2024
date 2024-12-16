export default function drawTable(data: Array<Record<string, string | number>>): string {
	const table: string[] = []

	const keys: string[] = Object.keys(data[0])
	const values: string[][] = []
	const paddings: number[] = keys.map((key) => key.length)

	for (const element of data) {
		const _values: string[] = []

		let i: number = 0
		for (const key in element) {
			const value: string = `${element[key]}`
			paddings[i] = Math.max(paddings[i], value.length)
			_values.push(value)
			i++
		}

		values.push(_values)
	}

	let lineSeparator: string = '+'
	let rowTitles: string = '|'

	for (let i = 0; i < paddings.length; i++) {
		const title: string = keys[i][0].toUpperCase() + keys[i].substring(1)
		const padding: number = paddings[i]

		lineSeparator += '-'.repeat(padding + 2) + '+'
		rowTitles += ` ${title.padEnd(padding)} |`
	}

	table.push(lineSeparator, rowTitles, lineSeparator)

	for (const element of values) {
		let row: string = '|'
		for (let i = 0; i < element.length; i++) {
			const value: string = element[i]
			const padding: number = paddings[i]
			row += ` ${value.padEnd(padding)} |`
		}

		table.push(row)
	}

	table.push(lineSeparator)

	return table.join('\n')
}

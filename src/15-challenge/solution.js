/**
 * @param {Array<Object>} data
 * @returns {string}
 */
export default function drawTable(data) {
	/** @type {string[]}>} */
	const table = []

	/** @type {string[]}>} */
	const keys = Object.keys(data[0])

	/** @type {string[][]}>} */
	const values = []

	/** @type {number[]}>} */
	const paddings = keys.map((key) => key.length)

	for (const element of data) {
		/** @type {string[]}>} */
		const _values = []

		/** @type {number}>} */
		let i = 0

		for (const key in element) {
			/** @type {string}>} */
			const value = `${element[key]}`

			paddings[i] = Math.max(paddings[i], value.length)
			_values.push(value)
			i++
		}

		values.push(_values)
	}

	/** @type {string}>} */
	let lineSeparator = '+'

	/** @type {string}>} */
	let rowTitles = '|'

	for (let i = 0; i < paddings.length; i++) {
		/** @type {string}>} */
		const title = keys[i][0].toUpperCase() + keys[i].substring(1)

		/** @type {number}>} */
		const padding = paddings[i]

		lineSeparator += '-'.repeat(padding + 2) + '+'
		rowTitles += ` ${title.padEnd(padding)} |`
	}

	table.push(lineSeparator, rowTitles, lineSeparator)

	for (const element of values) {
		/** @type {string}>} */
		let row = '|'

		for (let i = 0; i < element.length; i++) {
			/** @type {string}>} */
			const value = element[i]

			/** @type {number}>} */
			const padding = paddings[i]

			row += ` ${value.padEnd(padding)} |`
		}

		table.push(row)
	}

	table.push(lineSeparator)

	return table.join('\n')
}

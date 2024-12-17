/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 */
export default function drawRace(indices, length) {
	/** @type {string} */
	const race = indices.reduce((prevValue, value, index) => {
		const reindeerI = (value + length) % length
		let iceTrack = `${'~'.repeat(reindeerI)}${'r'.slice(~reindeerI + 2)}`.padEnd(length, '~')
		return prevValue + ' '.repeat(indices.length - index - 1) + iceTrack + ` /${index + 1}\n`
	}, '')

	return race.trimEnd()
}

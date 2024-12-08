export default function drawRace(indices: number[], length: number): string {
	const race: string = indices.reduce((prevValue, value, index) => {
		const reindeerI: number = (value + length) % length
		let iceTrack: string = `${'~'.repeat(reindeerI)}${'r'.slice(~reindeerI + 2)}`.padEnd(length, '~')
		return prevValue + ' '.repeat(indices.length - index - 1) + iceTrack + ` /${index + 1}\n`
	}, '')

	return race.trimEnd()
}

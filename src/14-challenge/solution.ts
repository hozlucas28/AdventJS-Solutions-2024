export default function minMovesToStables(reindeer: number[], stables: number[]): number {
	let minMoves: number = 0

	while (reindeer.length) {
		const minReindeer: number = Math.min(...reindeer)
		const minStables: number = Math.min(...stables)
		minMoves += Math.abs(minReindeer - minStables)

		reindeer.splice(reindeer.indexOf(minReindeer), 1)
		stables.splice(stables.indexOf(minStables), 1)
	}

	return minMoves
}

/**
 * @param {number[]} reindeer
 * @param {number[]} stables
 * @returns {number}
 */
export default function minMovesToStables(reindeer, stables) {
	/** @type {number}>} */
	let minMoves = 0

	while (reindeer.length) {
		/** @type {number}>} */
		const minReinder = Math.min(...reindeer)

		/** @type {number}>} */
		const minStables = Math.min(...stables)

		minMoves += Math.abs(minReinder - minStables)

		reindeer.splice(reindeer.indexOf(minReinder), 1)
		stables.splice(stables.indexOf(minStables), 1)
	}

	return minMoves
}

/**
 * @param {boolean[][]} grid
 * @returns {number[][]}
 */
export default function detectBombs(grid) {
	/** @type {number[][]}>} */
	const adjacentsBombs = []

	for (let i = 0; i < grid.length; i++) {
		/** @type {boolean[]}>} */
		const row = grid[i]

		/** @type {number[]}>} */
		const bombsInRow = []

		for (let j = 0; j < row.length; j++) {
			/** @type {number}>} */
			const startI = i - 1

			/** @type {number}>} */
			const stopI = i + 2

			/** @type {number}>} */
			const startJ = j - 1

			/** @type {number}>} */
			const stopJ = j + 2

			/** @type {number}>} */
			let bombs = 0

			for (let _i = startI; _i < stopI; _i++) {
				if (_i < 0 || _i > grid.length - 1) continue

				for (let _j = startJ; _j < stopJ; _j++) {
					if (_j < 0 || _j > row.length - 1) continue
					bombs += ~~grid[_i][_j]
				}
			}

			bombsInRow.push(bombs - ~~row[j])
		}

		adjacentsBombs.push(bombsInRow)
	}

	return adjacentsBombs
}

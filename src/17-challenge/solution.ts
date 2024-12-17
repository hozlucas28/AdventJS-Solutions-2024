export default function detectBombs(grid: boolean[][]): number[][] {
	const adjacentsBombs: number[][] = []

	for (let i = 0; i < grid.length; i++) {
		const row: boolean[] = grid[i]
		const bombsInRow: number[] = []

		for (let j = 0; j < row.length; j++) {
			const startI: number = i - 1
			const stopI: number = i + 2

			const startJ: number = j - 1
			const stopJ: number = j + 2

			let bombs: number = 0

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

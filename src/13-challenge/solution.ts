type Move = 'D' | 'L' | 'R' | 'U'

export default function isRobotBack(moves: string): true | [number, number] {
	const currentPos: [number, number] = [0, 0]

	const oppositeMoves: Record<Move, Move> = {
		D: 'U',
		L: 'R',
		R: 'L',
		U: 'D',
	}

	const moveActions: Record<Move, [number, number]> = {
		D: [0, -1],
		L: [-1, 0],
		R: [1, 0],
		U: [0, 1],
	}

	moves = moves.replaceAll(/[*][DLRU]/g, (value) => value.substring(1).repeat(2))
	moves = moves.replaceAll(/[!][DLRU]/g, (value) => oppositeMoves[value.substring(1) as Move])

	moves = moves.split('').reduce((prev, current) => {
		if (prev.includes('?')) {
			prev = prev.replaceAll('?', '')
			return !prev.includes(current) ? prev + current : prev
		}

		return prev + current
	})

	for (const move of moves) {
		const offset: [number, number] = moveActions[move as Move]
		currentPos[0] += offset[0]
		currentPos[1] += offset[1]
	}

	return currentPos[0] + currentPos[1] ? currentPos : true
}

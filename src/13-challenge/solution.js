/**
 * @param {string} moves
 * @returns {true|[number, number]} Return true if robot returns or position
 */
export default function isRobotBack(moves) {
	/** @type {[number, number]} */
	const currentPos = [0, 0]

	/** @type {Object.<'D' | 'L' | 'R' | 'U', 'D' | 'L' | 'R' | 'U'>} */
	const oppositeMoves = {
		D: 'U',
		L: 'R',
		R: 'L',
		U: 'D',
	}

	/** @type {Object.<'D' | 'L' | 'R' | 'U', [number, number]>} */
	const moveActions = {
		D: [0, -1],
		L: [-1, 0],
		R: [1, 0],
		U: [0, 1],
	}

	moves = moves.replaceAll(/[*][DLRU]/g, (value) => value.substring(1).repeat(2))
	moves = moves.replaceAll(/[!][DLRU]/g, (value) => oppositeMoves[value.substring(1)])

	moves = moves.split('').reduce((prev, current) => {
		if (prev.includes('?')) {
			prev = prev.replaceAll('?', '')
			return !prev.includes(current) ? prev + current : prev
		}

		return prev + current
	})

	for (const move of moves) {
		/** @type {[number, number]}>} */
		const offset = moveActions[move]
		currentPos[0] += offset[0]
		currentPos[1] += offset[1]
	}

	return currentPos[0] + currentPos[1] ? currentPos : true
}

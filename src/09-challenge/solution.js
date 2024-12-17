/**
 * @param {string[]} board - Represent the train situation
 * @param {'U' | 'D' | 'R' | 'L'} mov - Movement direction
 * @returns {'none' | 'crash' | 'eat'}
 */
export default function moveTrain(board, mov) {
	/** @type {Object.<'U' | 'D' | 'R' | 'L', number>} */
	const moveActions = {
		D: board[0].length + 1,
		L: -1,
		R: 1,
		U: -board[0].length - 1,
	}

	/** @type {Object.<'·' | '*' | '|' | 'o' | 'undefined', 'none' | 'crash' | 'eat'>} */
	const resultActions = {
		'·': 'none',
		'*': 'eat',
		'|': 'crash',
		'o': 'crash',
		'undefined': 'crash',
	}

	/** @type {string} */
	const boardStringified = board.join('|')

	/** @type {number} */
	const trainI = boardStringified.indexOf('@')
	if (trainI === -1) return 'none'

	/** @type {string} */
	const nextTrainCell = boardStringified[trainI + moveActions[mov]]

	return resultActions[nextTrainCell]
}

type Movement = 'U' | 'D' | 'R' | 'L'
type Space = '·' | '@' | '*' | 'o'

export type Board = string[]
export type Result = 'none' | 'crash' | 'eat'

export default function moveTrain(board: Board, mov: Movement): Result {
	const moveActions: Record<Movement, number> = {
		D: board[0].length + 1,
		L: -1,
		R: 1,
		U: -board[0].length - 1,
	}

	const resultActions: Record<Exclude<Space, '@'> | '|' | 'undefined', Result> = {
		'·': 'none',
		'*': 'eat',
		'|': 'crash',
		'o': 'crash',
		'undefined': 'crash',
	}

	const boardStringified: string = board.join('|')

	const trainI: number = boardStringified.indexOf('@')
	if (trainI === -1) return 'none'

	const nextTrainCell = boardStringified[trainI + moveActions[mov]] as Exclude<Space, '@'> | 'undefined'

	return resultActions[nextTrainCell]
}

import type { BinaryTree } from './solution'
import fn from './solution'

describe('Challenge 21: return the height of the binary tree', () => {
	it('Test 01', () => {
		const tree: BinaryTree = {
			value: '🎁',
			left: null,
			right: null,
		}

		const result: number = fn(tree)
		const expected: number = 1

		expect(result).toBe(expected)
	})

	it('Test 02', () => {
		const tree: BinaryTree = {
			value: '🎁',
			left: {
				value: '🎄',
				left: {
					value: '⭐',
					left: null,
					right: null,
				},
				right: {
					value: '🎅',
					left: null,
					right: null,
				},
			},
			right: {
				value: '❄️',
				left: null,
				right: {
					value: '🦌',
					left: null,
					right: null,
				},
			},
		}

		const result: number = fn(tree)
		const expected: number = 3

		expect(result).toBe(expected)
	})

	it('Test 03', () => {
		const tree: BinaryTree = {
			value: '🎁',
			left: {
				value: '🎄',
				left: {
					value: '⭐',
					left: {
						value: '🎅',
						left: null,
						right: null,
					},
					right: null,
				},
				right: null,
			},
			right: null,
		}

		const result: number = fn(tree)
		const expected: number = 4

		expect(result).toBe(expected)
	})

	it('Test 04', () => {
		const result: number = fn(null)
		const expected: number = 0
		expect(result).toBe(expected)
	})
})

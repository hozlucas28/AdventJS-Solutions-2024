/**
 * @typedef {{ value: string; left?: BinaryTree; right?: BinaryTree }} BinaryTree
 */

/**
 * @param {BinaryTree | undefined} tree1 - The first binary tree.
 * @param {BinaryTree | undefined} tree2 - The second binary tree.
 * @returns {[boolean, string]}
 */
export default function isTreesSynchronized(tree1, tree2) {
	/** @type {[boolean, string]} */
	const result = [tree1?.value === tree2?.value, `${tree1?.value}`]
	if (!tree1?.left || !tree2?.right) return result

	/** @type {BinaryTree} */
	const leftBranch01 = tree1.left

	/** @type {BinaryTree | undefined} */
	const rightBranch01 = tree1.right

	/** @type {BinaryTree | undefined} */
	const leftBranch02 = tree2.left

	/** @type {BinaryTree} */
	const rightBranch02 = tree2.right

	result[0] = result[0] && isTreesSynchronized(leftBranch01, rightBranch02)[0]
	result[0] = result[0] && isTreesSynchronized(rightBranch01, leftBranch02)[0]

	return result
}

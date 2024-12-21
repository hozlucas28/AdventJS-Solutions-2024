/**
 * @typedef {{ value: string; left: BinaryTree | null; right: BinaryTree | null }} BinaryTree
 */

/**
 * @param {BinaryTree | null} tree
 * @returns {number} - Height of the tree.
 */
export default function treeHeight(tree) {
	if (!tree) return 0

	/** @type {number} */
	const leftHeight = treeHeight(tree.left)

	/** @type {number} */
	const rightHeight = treeHeight(tree.right)

	return 1 + Math.max(leftHeight, rightHeight)
}

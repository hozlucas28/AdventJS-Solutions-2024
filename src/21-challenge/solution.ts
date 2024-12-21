export interface BinaryTree {
	value: string
	left: BinaryTree | null
	right: BinaryTree | null
}

export default function treeHeight(tree: BinaryTree | null): number {
	if (!tree) return 0

	const leftHeight: number = treeHeight(tree.left)
	const rightHeight: number = treeHeight(tree.right)

	return 1 + Math.max(leftHeight, rightHeight)
}

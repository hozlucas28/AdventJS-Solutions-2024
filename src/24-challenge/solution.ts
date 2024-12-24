interface BinaryTree {
	value: string
	left?: BinaryTree
	right?: BinaryTree
}

export default function isTreesSynchronized(tree1?: BinaryTree, tree2?: BinaryTree): [boolean, string] {
	const result: [boolean, string] = [tree1?.value === tree2?.value, `${tree1?.value}`]
	if (!tree1?.left || !tree2?.right) return result

	const leftBranch01: BinaryTree = tree1.left
	const rightBranch01: BinaryTree | undefined = tree1.right

	const leftBranch02: BinaryTree | undefined = tree2.left
	const rightBranch02: BinaryTree = tree2.right

	result[0] = result[0] && isTreesSynchronized(leftBranch01, rightBranch02)[0]
	result[0] = result[0] && isTreesSynchronized(rightBranch01, leftBranch02)[0]

	return result
}

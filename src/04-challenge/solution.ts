export default function createXmasTree(height: number, ornament: string): string {
	let xmasTree: string = ''

	let i: number
	let branchBlankSpaces: string

	const trunkBlankSpaces: string = '_'.repeat(height - 1)

	for (i = 0; i < height; i++) {
		branchBlankSpaces = '_'.repeat(height - i - 1)
		xmasTree += `${branchBlankSpaces}${ornament.repeat(i * 2 + 1)}${branchBlankSpaces}\n`
	}

	xmasTree += `${trunkBlankSpaces}#${trunkBlankSpaces}\n`
	xmasTree += `${trunkBlankSpaces}#${trunkBlankSpaces}`

	return xmasTree
}

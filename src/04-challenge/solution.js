/**
 * @param {number} height
 * @param {string} ornament
 * @returns {string}
 */
export default function createXmasTree(height, ornament) {
	/** @type {string} */
	let xmasTree = ''

	/** @type {number} */
	let i

	/** @type {string} */
	let branchBlankSpaces

	/** @type {string} */
	const trunkBlankSpaces = '_'.repeat(height - 1)

	for (i = 0; i < height; i++) {
		branchBlankSpaces = '_'.repeat(height - i - 1)
		xmasTree += `${branchBlankSpaces}${ornament.repeat(i * 2 + 1)}${branchBlankSpaces}\n`
	}

	xmasTree += `${trunkBlankSpaces}#${trunkBlankSpaces}\n`
	xmasTree += `${trunkBlankSpaces}#${trunkBlankSpaces}`

	return xmasTree
}

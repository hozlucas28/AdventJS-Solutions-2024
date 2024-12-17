/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes
 */
export default function organizeShoes(shoes) {
	/** @type {number[]} */
	const pairOfShoes = []

	/** @type {number[]} */
	const iShoes = []

	/** @type {number[]} */
	const rShoes = []

	for (const shoe of shoes) {
		if (shoe.type === 'I') {
			iShoes.push(shoe.size)
			continue
		}

		rShoes.push(shoe.size)
	}

	for (const iShoe of iShoes) {
		/** @type {number} */
		const rShoeI = rShoes.findIndex((shoe) => shoe === iShoe)
		if (rShoeI === -1) continue

		pairOfShoes.push(iShoe)
		rShoes.splice(rShoeI, 1)
	}

	return pairOfShoes
}

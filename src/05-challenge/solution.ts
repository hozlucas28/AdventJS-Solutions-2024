export type Shoe = {
	type: 'I' | 'R'
	size: number
}

export default function organizeShoes(shoes: Shoe[]): number[] {
	const pairOfShoes: number[] = []

	const iShoes: number[] = []
	const rShoes: number[] = []

	for (const shoe of shoes) {
		if (shoe.type === 'I') {
			iShoes.push(shoe.size)
			continue
		}

		rShoes.push(shoe.size)
	}

	for (const iShoe of iShoes) {
		const rShoeI: number = rShoes.findIndex((shoe) => shoe === iShoe)
		if (rShoeI === -1) continue

		pairOfShoes.push(iShoe)
		rShoes.splice(rShoeI, 1)
	}

	return pairOfShoes
}

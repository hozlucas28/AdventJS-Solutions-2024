export default function generateGiftSets(gifts: string[]): string[][] {
	const maxCombinations: number = 2 ** gifts.length - 1
	const combinations: string[][] = []

	for (const gift of gifts) combinations.push([gift])

	let iStart: number = 0
	let iStop: number = gifts.length - 1
	let diff: number = iStop - 1

	let jStop: number = iStop + 1

	while (combinations.length < maxCombinations - 1) {
		let offset: number = 0

		for (let i = iStart; i < iStop; i++) {
			const anchorGift: string[] = combinations[i]

			for (let j = i + 1; j < jStop; j++) {
				const nextGift: string[] = combinations[j].filter((value) => !anchorGift.includes(value))
				combinations.push([...anchorGift, ...nextGift])
			}

			offset++
		}

		iStart = jStop
		iStop += offset

		if (iStart === iStop) {
			iStart++
			iStop = iStart + diff - 1
			diff = iStop - iStart
		}

		jStop = iStop + 1
	}

	combinations.length !== maxCombinations && combinations.push(gifts)

	return combinations
}

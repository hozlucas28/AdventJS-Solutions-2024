/**
 * @param {string[]} gifts - List of unique gifts.
 * @returns {string[][]} - All possible combinations of gifts, sorted by length.
 */
export default function generateGiftSets(gifts) {
	/** @type {number} */
	const maxCombinations = 2 ** gifts.length - 1

	/** @type {string[][]} */
	const combinations = []

	for (const gift of gifts) combinations.push([gift])

	/** @type {number} */
	let iStart = 0

	/** @type {number} */
	let iStop = gifts.length - 1

	/** @type {number} */
	let diff = iStop - 1

	/** @type {number} */
	let jStop = iStop + 1

	while (combinations.length < maxCombinations - 1) {
		/** @type {number} */
		let offset = 0

		for (let i = iStart; i < iStop; i++) {
			/** @type {string[]} */
			const anchorGift = combinations[i]

			for (let j = i + 1; j < jStop; j++) {
				/** @type {string[]} */
				const nextGift = combinations[j].filter((value) => !anchorGift.includes(value))
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

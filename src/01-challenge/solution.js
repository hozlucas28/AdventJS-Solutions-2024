/**
 * @param {number[]} gifts
 * @returns {number[]}
 */
export default function prepareGifts(gifts) {
	/** @type {Set<number>} */
	const uniqueGifts = new Set(gifts)

	/** @type {number[]} */
	const sortedUniqueGifts = [...uniqueGifts].sort((a, b) => a - b)

	return sortedUniqueGifts
}

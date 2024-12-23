/**
 * @param {number[]} nums - List of integers.
 * @returns {number[]} - List of missing numbers.
 */
export default function findMissingNumbers(nums) {
	/** @type {Set<number>} */
	const uniqueNums = new Set(nums)

	/** @type {number} */
	const maxUniqueNum = Math.max(...uniqueNums)

	/** @type {Set<number>} */
	const collection = new Set()
	for (let i = 1; i < maxUniqueNum; i++) collection.add(i)

	/** @type {number[]} */
	const missingNums = [...collection.difference(uniqueNums)]

	return missingNums
}

export default function findMissingNumbers(nums: number[]): number[] {
	const uniqueNums: Set<number> = new Set(nums)
	const maxUniqueNum: number = Math.max(...uniqueNums)

	const collection: Set<number> = new Set()
	for (let i = 1; i < maxUniqueNum; i++) collection.add(i)

	const missingNums: number[] = [...collection.difference(uniqueNums)]

	return missingNums
}

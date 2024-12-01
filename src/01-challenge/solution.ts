export default function prepareGifts(gifts: number[]): number[] {
	const uniqueGifts: Set<number> = new Set(gifts)
	const sortedUniqueGifts: number[] = [...uniqueGifts].sort((a, b) => a - b)
	return sortedUniqueGifts
}

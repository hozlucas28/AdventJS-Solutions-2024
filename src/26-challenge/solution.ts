export default function getCompleted(timeWorked: string, totalTime: string): `${string}%` {
	const [wHours, wMinutes, wSeconds] = timeWorked.split(':').map(Number)
	const [tHours, tMinutes, tSeconds] = totalTime.split(':').map(Number)

	const worked: number = wHours * 3600 + wMinutes * 60 + wSeconds
	const total: number = tHours * 3600 + tMinutes * 60 + tSeconds
	const productivity: `${string}%` = `${Math.round((worked / total) * 100)}%`

	return productivity
}

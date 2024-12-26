export default function getCompleted(timeWorked: string, totalTime: string): `${string}%` {
	const worked: Date = new Date(`1970-01-01T${timeWorked}`)
	const totalWorked: Date = new Date(`1970-01-01T${totalTime}`)
	const productivity: `${string}%` = `${Math.round((worked.getTime() / totalWorked.getTime()) * 100)}%`
	return productivity
}

/**
 * @param {string} timeWorked - Time worked in hh:mm:ss format.
 * @param {string} totalTime - Total estimated time in hh:mm:ss format.
 * @returns {string} - The completed percentage rounded to the nearest integer with a % sign.
 */
export default function getCompleted(timeWorked, totalTime) {
	const [wHours, wMinutes, wSeconds] = timeWorked.split(':').map(Number)
	const [tHours, tMinutes, tSeconds] = totalTime.split(':').map(Number)

	/** @type {number} */
	const worked = wHours * 3600 + wMinutes * 60 + wSeconds

	/** @type {number} */
	const total = tHours * 3600 + tMinutes * 60 + tSeconds

	/** @type {string} */
	const productivity = `${Math.round((worked / total) * 100)}%`

	return productivity
}

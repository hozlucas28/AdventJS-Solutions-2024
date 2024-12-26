/**
 * @param {string} timeWorked - Time worked in hh:mm:ss format.
 * @param {string} totalTime - Total estimated time in hh:mm:ss format.
 * @returns {string} - The completed percentage rounded to the nearest integer with a % sign.
 */
export default function getCompleted(timeWorked, totalTime) {
	/** @type {Date} */
	const worked = new Date(`1970-01-01T${timeWorked}`)

	/** @type {Date} */
	const totalWorked = new Date(`1970-01-01T${totalTime}`)

	/** @type {string} */
	const productivity = `${Math.round((worked.getTime() / totalWorked.getTime()) * 100)}%`

	return productivity
}

/**
 * @param {string[]} box
 * @returns {boolean} True if the gift is inside the box
 */
export default function inBox(box) {
	/** @type {RegExp} */
	const regex = new RegExp(/^# *\* *#$/g)

	/** @type {number} */
	let i

	/** @type {string} */
	let line

	for (i = 1; i < box.length - 1; i++) {
		/** @type {string} */
		line = box[i]

		if (regex.test(line)) return true
	}

	return false
}

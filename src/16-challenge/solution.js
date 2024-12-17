/**
 * @param {string} s
 * @returns {string}
 */
export default function removeSnow(s) {
	/** @type {string}>} */
	let pathCleared = s

	/** @type {number}>} */
	let lastI = 0

	for (let i = 0; i < pathCleared.length - 1; i++) {
		/** @type {string}>} */
		const currentChar = pathCleared[i]

		/** @type {string}>} */
		const nextChar = pathCleared[i + 1]

		if (currentChar !== nextChar) {
			lastI = i
			continue
		}

		pathCleared = pathCleared.substring(0, i) + pathCleared.substring(i + 2)
		i = lastI - 1
	}

	return pathCleared
}

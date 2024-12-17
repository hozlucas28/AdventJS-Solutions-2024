/** @param {string} ornaments
 * @return {number|undefined} - The price of the tree
 */
export default function calculatePrice(ornaments) {
	/** @type {Object.<'#' | '*' | '@' | '^' | 'o', number>} */
	const prices = {
		'#': 50,
		'*': 1,
		'@': 100,
		'^': 10,
		'o': 5,
	}

	if (ornaments.match(/[^#*@^o]/)) return undefined

	const ornament = /** @type {'#' | '*' | '@' | '^' | 'o'} */ (ornaments.at(-1))

	/** @type {number} */
	let totalPrice = prices[ornament]

	for (let i = 0; i < ornaments.length - 1; i++) {
		/** @type {number} */
		const currentOrnament = prices[ornaments[i]]

		/** @type {number} */
		const nextOrnament = prices[ornaments[i + 1]]

		totalPrice += currentOrnament - nextOrnament < 0 ? -currentOrnament : currentOrnament
	}

	return totalPrice
}

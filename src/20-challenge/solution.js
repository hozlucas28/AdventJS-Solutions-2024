/**
 * @typedef {Record<string, number>} GiftsCount
 */

/**
 * @typedef {{ missing: GiftsCount, extra: GiftsCount }} GiftListFixed
 */

/**
 * @param {string[]} received
 * @param {string[]} expected
 * @returns {GiftListFixed}
 */
export default function fixGiftList(received, expected) {
	/** @type {GiftListFixed} */
	const giftListFixed = {
		missing: {},
		extra: {},
	}

	for (const gift of expected) {
		/** @type {number} */
		const giftI = received.indexOf(gift)

		if (~giftI) {
			received.splice(giftI, 1)
			continue
		}

		giftListFixed.missing[gift] = ~~giftListFixed.missing[gift] + 1
	}

	for (const gift of received) {
		giftListFixed.extra[gift] = ~~giftListFixed.extra[gift] + 1
	}

	return giftListFixed
}

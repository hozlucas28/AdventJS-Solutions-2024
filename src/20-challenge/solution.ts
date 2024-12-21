interface GiftListFixed {
	missing: Record<string, number>
	extra: Record<string, number>
}

export default function fixGiftList(received: string[], expected: string[]): GiftListFixed {
	const giftListFixed: GiftListFixed = {
		missing: {},
		extra: {},
	}

	for (const gift of expected) {
		const giftI: number = received.indexOf(gift)

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

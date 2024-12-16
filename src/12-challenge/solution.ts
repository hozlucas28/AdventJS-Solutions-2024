type Ornament = '#' | '*' | '@' | '^' | 'o'

export default function calculatePrice(ornaments: string): number | undefined {
	const prices: Record<Ornament, number> = {
		'#': 50,
		'*': 1,
		'@': 100,
		'^': 10,
		'o': 5,
	}

	if (ornaments.match(/[^#*@^o]/)) return undefined

	let totalPrice: number = prices[ornaments.at(-1) as Ornament]

	for (let i = 0; i < ornaments.length - 1; i++) {
		const currentOrnament: number = prices[ornaments[i] as Ornament]
		const nextOrnament: number = prices[ornaments[i + 1] as Ornament]

		totalPrice += currentOrnament - nextOrnament < 0 ? -currentOrnament : currentOrnament
	}

	return totalPrice
}

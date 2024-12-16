export default function removeSnow(s: string): string {
	let pathCleared: string = s

	let lastI: number = 0

	for (let i = 0; i < pathCleared.length - 1; i++) {
		const currentChar: string = pathCleared[i]
		const nextChar: string = pathCleared[i + 1]
		if (currentChar !== nextChar) {
			lastI = i
			continue
		}

		pathCleared = pathCleared.substring(0, i) + pathCleared.substring(i + 2)
		i = lastI - 1
	}

	return pathCleared
}

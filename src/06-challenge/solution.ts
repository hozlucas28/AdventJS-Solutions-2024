export default function inBox(box: string[]): boolean {
	const regex: RegExp = new RegExp(/^# *\* *#$/g)

	let i: number
	let line: string

	for (i = 1; i < box.length - 1; i++) {
		line = box[i]
		if (regex.test(line)) return true
	}

	return false
}

export interface ChildData {
	name: string
	address: string
}

export default function findInAgenda(agenda: string, phone: string): ChildData | null {
	const childData: ChildData = { name: '', address: '' }
	const nameRegex: RegExp = new RegExp(/(?<=<)(?:.*)(?=>)/)
	const phoneRegex: RegExp = new RegExp(/(?<=^|\s)\+\d{1,2}(?:-\d*){3}(?=$|\s)/)
	const replaceRegex: RegExp = new RegExp(/<(?:.*)>|(?<=^|\s)\+\d{1,2}(?:-\d*){3}(?=$|\s)/g)

	let counter: number = 0
	const childrenData: string[] = agenda.split('\n')

	for (let i = 0; i < childrenData.length; i++) {
		if (counter > 1) return null

		const data: string = childrenData[i]
		const dataPhone: string = `${data.match(phoneRegex)?.[0]}`
		if (!dataPhone.match(phone)) continue

		const name: string = `${data.match(nameRegex)?.[0]}`
		const address = data.replaceAll(replaceRegex, '').trim()

		childData.name = name
		childData.address = address
		counter++
	}

	return counter === 1 ? childData : null
}

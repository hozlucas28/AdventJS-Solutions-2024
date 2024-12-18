/**
 * @param {string} agenda
 * @param {string} phone
 * @returns {{ name: string, address: string } | null}
 */
export default function findInAgenda(agenda, phone) {
	/** @type {{ name: string, address: string }} */
	const childData = { name: '', address: '' }

	/** @type {RegExp} */
	const nameRegex = new RegExp(/(?<=<)(?:.*)(?=>)/)

	/** @type {RegExp} */
	const phoneRegex = new RegExp(/(?<=^|\s)\+\d{1,2}(?:-\d*){3}(?=$|\s)/)

	/** @type {RegExp} */
	const replaceRegex = new RegExp(/<(?:.*)>|(?<=^|\s)\+\d{1,2}(?:-\d*){3}(?=$|\s)/g)

	/** @type {number} */
	let counter = 0

	/** @type {string[]} */
	const childrenData = agenda.split('\n')

	for (let i = 0; i < childrenData.length; i++) {
		if (counter > 1) return null

		/** @type {string} */
		const data = childrenData[i]

		/** @type {string} */
		const dataPhone = `${data.match(phoneRegex)?.[0]}`
		if (!dataPhone.match(phone)) continue

		/** @type {string} */
		const name = `${data.match(nameRegex)?.[0]}`

		/** @type {string} */
		const address = data.replaceAll(replaceRegex, '').trim()

		childData.name = name
		childData.address = address
		counter++
	}

	return counter === 1 ? childData : null
}

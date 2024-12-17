/**
 * @param {string} filename - The filename to decode.
 * @returns {string} The decoded filename.
 */
export default function decodeFilename(filename) {
	/** @type {RegExp} */
	const regex = new RegExp(/(?!\d*_)(.*)(?=\..*)/)

	/** @type {RegExpExecArray | null} */
	const matchExec = regex.exec(filename)

	return matchExec ? matchExec[0] : filename
}

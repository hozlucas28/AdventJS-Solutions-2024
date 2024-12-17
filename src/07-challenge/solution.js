/**
 * @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */
export default function fixPackages(packages) {
	/** @type {RegExp} */
	const regex = new RegExp(/(\()(\w+)(\))/)

	while (regex.test(packages)) {
		packages = packages.replace(regex, (_, __, match) => match.split('').reverse().join(''))
	}

	return packages
}

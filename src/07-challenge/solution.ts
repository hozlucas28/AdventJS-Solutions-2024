export default function fixPackages(packages: string): string {
	const regex: RegExp = new RegExp(/(\()(\w+)(\))/)

	while (regex.test(packages)) {
		packages = packages.replace(regex, (_, __, match: string) => match.split('').reverse().join(''))
	}

	return packages
}

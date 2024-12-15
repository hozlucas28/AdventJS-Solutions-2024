export default function decodeFilename(filename: string): string {
	const regex: RegExp = new RegExp(/(?!\d*_)(.*)(?=\..*)/)
	const matchExec: RegExpExecArray | null = regex.exec(filename)
	return matchExec ? matchExec[0] : filename
}

module.exports = {
	moduleFileExtensions: ['ts', 'js', 'json', 'node'],
	testEnvironment: 'node',
	testRegex: '/src/(?!template/).*\\.spec\\.ts$',
	transform: { '^.+\\.ts?$': 'ts-jest' },
}

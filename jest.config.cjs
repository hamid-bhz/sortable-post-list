module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
		'^@components$': '<rootDir>/src/components',
		'^@constants$': '<rootDir>/src/constants',
		'^@service$': '<rootDir>/src/service',
		'^@icons$': '<rootDir>/src/icons',
		'^@types$': '<rootDir>/src/types',
		'^@hooks$': '<rootDir>/src/hooks'
	},
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest',
		'^.+\\.(js|jsx)$': 'babel-jest'
	},
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts']
}

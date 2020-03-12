module.exports = {
	preset: '@autoguru/jest-preset',
	testPathIgnorePatterns: [
		'/node_modules/',
		'/templates/component/',
		'\\.treat\\.tsx?$',
	],
	setupFilesAfterEnv: [
		require.resolve('./scripts/test-setup-themes.js'),
		require.resolve('@testing-library/jest-dom/extend-expect'),
	],
	collectCoverageFrom: [
		'lib/**/*.{ts,tsx}',
		'!**/*stories*.{ts,tsx}',
		'!**/*.treat.ts',
	],
};

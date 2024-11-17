/* eslint sort-keys: ["error", "asc", {"caseSensitive": false}] */

module.exports = {
	extends: [
		'eslint-config-xo-overrides',
	],
	plugins: [
		'@typescript-eslint',
	],
	rules: {
		'@typescript-eslint/comma-dangle': [ 'error', 'always-multiline' ],
		'@typescript-eslint/object-curly-spacing': [ 'error', 'always' ],
	},
};

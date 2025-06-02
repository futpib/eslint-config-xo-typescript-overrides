/* eslint sort-keys: ["error", "asc", {"caseSensitive": false}] */

const baseConfig = require('eslint-config-xo-overrides');

module.exports = [
	...baseConfig,
	{
		rules: {
			'@stylistic/comma-dangle': [ 'error', 'always-multiline' ],
			'@stylistic/object-curly-spacing': [ 'error', 'always' ],
		},
	},
];

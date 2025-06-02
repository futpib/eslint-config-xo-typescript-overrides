/* eslint sort-keys: ["error", "asc", {"caseSensitive": false}] */

import baseConfig from 'eslint-config-xo-overrides';

const config = [
	...baseConfig,
	{
		rules: {
			'@stylistic/comma-dangle': [ 'error', 'always-multiline' ],
			'@stylistic/object-curly-spacing': [ 'error', 'always' ],
		},
	},
] as const;

export default config;

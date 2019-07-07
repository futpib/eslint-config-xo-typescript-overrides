module.exports = {
	rules: {
		'array-bracket-spacing': ['error', 'always'],
		'object-curly-spacing': ['error', 'always'],

		camelcase: ['error', {
			properties: 'never'
		}],

		'comma-dangle': ['error', 'always-multiline'],
		'operator-linebreak': ['error', 'before'],

		'unicorn/custom-error-definition': 'off'
	}
};

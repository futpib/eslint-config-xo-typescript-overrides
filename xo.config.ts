import customRules from './index.js';

export = [
	...customRules,
	{
		ignores: [ 'index.js', 'index.d.ts', 'xo.config.js', 'xo.config.d.ts' ],
	},
];

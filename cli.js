#!/usr/bin/env node

const fs = require('node:fs');
const path = require('node:path');
const process = require('node:process');

const configContent = `const tsOverrides = require('eslint-config-xo-typescript-overrides');

module.exports = [
	...tsOverrides,
];
`;

function main() {
	const xoConfigPath = path.join(process.cwd(), 'xo.config.js');

	// Check if xo.config.js already exists
	if (fs.existsSync(xoConfigPath)) {
		console.error('Error: xo.config.js already exists');
		process.exit(1);
	}

	// Check for legacy configuration in package.json
	try {
		const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
		if (packageJson.xo && (packageJson.xo.extends || packageJson.xo.rules)) {
			console.warn('Warning: Found legacy XO configuration in package.json. Consider migrating to xo.config.js');
		}
	} catch {
		// Package.json might not exist or be invalid
	}

	// Write xo.config.js
	try {
		fs.writeFileSync(xoConfigPath, configContent, 'utf8');
		console.log('Created xo.config.js');
	} catch (error) {
		console.error('Error creating xo.config.js:', error.message);
		process.exit(1);
	}
}

main();

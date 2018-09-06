
const fs = require('fs');
const path = require('path');

const {name} = require(path.join(__dirname, 'package.json'));

function main() {
	const package_ = require('./package.json');
	package_.xo = package_.xo || {};
	package_.xo.extends = package_.xo.extends || [];
	if (package_.xo.extends.includes(name)) {
		return;
	}
	package_.xo.extends.push(name);
	const str = JSON.stringify(package_, null, 2) + '\n';
	fs.writeFileSync('./package.json', str, 'utf8');
}

main();

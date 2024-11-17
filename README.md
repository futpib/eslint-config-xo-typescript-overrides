# eslint-config-xo-typescript-overrides
eslint+xo sharable config with some opinionated rule overrides

## Overrides

### Trailing commas in multiline objects and arrays

This makes diffs simpler.

Correct :+1: code:

```js
const fizz = {
  blep: 'bloop',
};
```

### Space around object and array literals

Cause it looks better.

Correct :+1: code:

```js
const { curly } = foo;
const bar = [ square ];
```

### No camelcase in property names

We still use objects as poor man's hashmaps.

Correct :+1: code:

```js
const rates = {
	eur_usd: 1,
};
```

### Linebreak before the operator

IMO reads better. Also makes diffs simpler.

Correct :+1: code:

```js
return user.email
	|| user.phone
	|| user.slug;
```

### Other enabled rules

- [unicorn/custom-error-definition](https://github.com/sindresorhus/eslint-plugin-unicorn/tree/master/docs/rules/custom-error-definition.md) - Enforce correct `Error` subclassing.

## Usage

Installation:

```bash
yarn add --dev eslint-config-xo-typescript-overrides
yarn eslint-config-xo-typescript-overrides
```

or

```bash
npm install --save-dev eslint-config-xo-typescript-overrides
./node_modules/.bin/eslint-config-xo-typescript-overrides
```

This will install the package and add the following to your `package.json`:

```json
{
  "xo": {
    "extends": ["eslint-config-xo-typescript-overrides"]
  }
}
```

# MenuDocs-lint
Central shareable eslint config for all MenuDocs projects

## Install via npm

```bash
npm i -dev eslint-config-tesseract eslint
```

## Install via yarn

```bash
yarn add -D eslint-config-tesseract eslint
```

## Install via github

NPM:

```bash
npm i --save-dev MenuDocs/eslint-config-tesseract eslint
```

Yarn:

```bash 
yarn add -D MenuDocs/eslint-config-tesseract eslint
```

## Standard eslint rules
```json
{
	"extends": "tesseract"
}
```
requires:
* eslint

## Setting up ESLint rules
ESLint may display a lot of warnings and errors about your code when you start using it, but don't let this startle you. In order to get started, follow these steps:

1) Create a file in your root directory named `.eslintrc.json` (where your main project file is located).
2) Copy the code below into the file.
```json
{
    "extends": "tesseract"
}
```
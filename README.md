# MenuDocs-lint
> Central shareable eslint config for all MenuDocs projects

## Installation

## Pre-requisites

- [ESLint](https://eslint.org)

### npm

```shell
npm i -D eslint-config-tesseract eslint
```

### yarn

```shell
yarn add -D eslint-config-tesseract eslint
```

### GitHub

- npm:

```shell
npm i --save-dev MenuDocs/eslint-config-tesseract eslint
```

- yarn:

```shell 
yarn add -D MenuDocs/eslint-config-tesseract eslint
```

## Standard ESLint rules

```json
{
    "extends": "tesseract"
}
```

## Standar ESlint rules for Typescript

- npm: 

```shell
npm i --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

- yarn:

```shell
yarn add -D @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

```json
{
    "extends": "tesseract/typescript"
}
```

## Prettier

- npm:

```shell
npm i --save-dev prettier eslint-plugin-prettier eslint-config-prettier
```

- yarn:

```shell
yarn add -D prettier eslint-plugin-prettier eslint-config-prettier
```
## Standard ESLint rules and Prettier

```json
{
    "extends": "tesseract/prettier"
}
```

## Standard ESLint rules and Prettier for Typescript

Note: Prettier config extends TypeScript eslint config.

```json
{
    "extends": "tesseract/prettier/typescript"
}
```
## Setting up ESLint rules

ESLint may display a lot of warnings and errors about your code when you start using it, but don't let this startle you. In order to get started, follow these steps:

1) Create a file in your root directory named `.eslintrc.json` (where your main project file is located).
2) Copy the code below into the file.
```json
{
    "extends": "tesseract"
}
```

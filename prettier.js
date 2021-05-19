module.exports = {
    extends: ['plugin:prettier/recommended', 'prettier'],
    rules: {
        "prettier/prettier": ["error", {
			"endOfLine": "auto",
            "quoteProps": "as-needed",
			"singleQuote": true
		}],
    }
}
module.exports = {
  env: { es2021: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:node/recommended",
    "plugin:perfectionist/recommended-natural",
    "plugin:prettier/recommended",
    "plugin:promise/recommended",
    "plugin:security/recommended-legacy",
    "plugin:sonarjs/recommended",
  ],
  plugins: ["json-format"],
  root: true,
  rules: {
    "comma-dangle": ["error", "always-multiline"],
    indent: ["error", 2],
    "no-var": "error",
    quotes: ["error", "double"],
    semi: ["error", "always"],
  },
};

module.exports = {
  env: { es2022: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:node/recommended",
    "plugin:perfectionist/recommended-natural",
    "plugin:prettier/recommended",
    "plugin:promise/recommended",
    "plugin:security/recommended-legacy",
    "plugin:sonarjs/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2022,
  },
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

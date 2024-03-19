module.exports = {
  env: { es2022: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:jsdoc/recommended",
    "plugin:node/recommended",
    "plugin:perfectionist/recommended-natural",
    "plugin:promise/recommended",
    "plugin:security/recommended-legacy",
    "plugin:sonarjs/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: 2022,
  },
  plugins: ["jsdoc", "json-format"],
  root: true,
  rules: {
    "no-var": "error",
  },
};

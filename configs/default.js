import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import jsdoc from "eslint-plugin-jsdoc";
import nodePlugin from "eslint-plugin-n";
import perfectionistNatural from "eslint-plugin-perfectionist/configs/recommended-natural";
import pluginSecurity from "eslint-plugin-security";
import sonarjs from "eslint-plugin-sonarjs";
import globals from "globals";

export default [
  js.configs.recommended,
  jsdoc.configs["flat/recommended"],
  perfectionistNatural,
  nodePlugin.configs["flat/recommended-module"],
  pluginSecurity.configs.recommended,
  sonarjs.configs.recommended,
  eslintConfigPrettier,
  {
    languageOptions: {
      ecmaVersion: 2022,
      globals: {
        ...globals.node,
      },
      sourceType: "module",
    },
    plugins: {
      jsdoc,
    },
    rules: {
      "no-var": "error",
    },
  },
];

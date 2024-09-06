import eslintPlugin from "eslint-plugin-eslint-plugin";

import cinnabarConfig from "./configs/javascript.js";

const files = ["index.js", "configs/**/*.js"];
const ignores = [];
const rules = {};

export default [
  ...cinnabarConfig.map((config) => ({
    ...config,
    files,
  })),
  ...[eslintPlugin.configs["flat/recommended"]].map((config) => ({
    ...config,
    files,
  })),
  {
    files,
    rules,
  },
  {
    ignores,
  },
];

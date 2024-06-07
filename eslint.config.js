import eslintPlugin from "eslint-plugin-eslint-plugin";

import cfConfig from "./configs/default.js";

export default [
  ...cfConfig,
  eslintPlugin.configs["flat/all"],
  {
    ignores: ["cinnabar.js"],
  },
];

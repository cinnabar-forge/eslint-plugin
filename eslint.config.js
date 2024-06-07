import eslintPlugin from "eslint-plugin-eslint-plugin";

import cfConfig from "./configs/default.js";

export default [
  ...cfConfig,
  eslintPlugin.configs["flat/all"],
  { files: ["index.js", "eslint.config.js", "configs/default.js"] },
];

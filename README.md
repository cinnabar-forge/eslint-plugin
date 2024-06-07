# Cinnabar Forge ESLint Plugin

A single set of ESLint rules, configurations and plugins to use across [Cinnabar Forge](https://github.com/cinnabar-forge) projects.

## Getting Started

To use this ESLint plugin in your project, you need to have ESLint installed. If you haven't installed ESLint yet, you can do so by running:

```bash
npm i -D eslint @cinnabar-forge/eslint-plugin
```

Create `eslint.config.js` with this content:

```javascript
import cinnabarPlugin from "@cinnabar-forge/eslint-plugin";

export default [
  ...cinnabarPlugin.default,
];
```

## Changelog

We curate a human-readable changelog. You can find it in the [CHANGELOG.md](CHANGELOG.md) file.

## License

This project is licensed under the **ISC License**, see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or create a pull request.

### Installation for developers

```bash
git clone git@github.com:cinnabar-forge/eslint-plugin.git cinnabar-forge-eslint-plugin
cd cinnabar-forge-eslint-plugin
npm ci
```

## Authors

- Timur Moziev ([@TimurRin](https://github.com/TimurRin))

# Cinnabar Forge ESLint Plugin

Enhance your JavaScript and Node.js project's code quality with `@cinnabar-forge/eslint-plugin`. This ESLint plugin aggregates a comprehensive set of rules, configurations, and plugins, including good practices from [Cinnabar Forge's](https://github.com/cinnabar-forge) projects.

## Getting Started

To use this ESLint plugin in your project, you need to have ESLint installed. If you haven't installed ESLint yet, you can do so by running:

```bash
npm install eslint --save-dev
```

After ensuring ESLint is in your project, install `@cinnabar-forge/eslint-plugin`:

```bash
npm i --save-dev @cinnabar-forge/eslint-plugin
```

Create `.eslintrc.json` with this content:

```json
{
  "extends": ["plugin:@cinnabar-forge/default"],
  "parserOptions": {
    "sourceType": "module"
  },
  "plugins": ["@cinnabar-forge"]
}
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

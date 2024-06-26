# Cinnabar Forge ESLint Plugin / Changelog

This changelog follows **Keep a Changelog** convention (<https://keepachangelog.com>).

## Wishlist

Features that we want to implement in the near future:

- Add TypeScript linting config.

## Known bugs

None

## [Unreleased]

_This section contains implemented but not released features._

## [0.5.0] - 2024-06-07

### Added

- Devcontainer config.
- Cinnabar Meta support.

### Changed

- Migrate to ESLint 9.

## [0.4.0] - 2024-03-19

### Added

- `jsdoc` plugin to `default` config.

## [0.3.0] - 2024-02-15

### Added

- `prettier` config to `default` config.

### Changed

- Readd `eslint` and `prettier` as `peerDependencies`.
- Update [README.md](README.md).

### Removed

- Styling rules and prettier plugin from `default` config.

## [0.2.1] - 2024-01-18

### Fixed

- Fix `ecmaVersion: 2022` missed in `parserOptions` in `default` config.

## [0.2.0] - 2024-01-17

### Changed

- Replace environment variable `es2021` with `es2022` in `default` config.
- Update `prettier` to `v3.2.4`.
- Update readme info.

## [0.1.0] - 2024-01-14

### Added

- `default` config.

[unreleased]: https://github.com/cinnabar-forge/eslint-plugin/compare/v0.5.0...HEAD
[0.5.0]: https://github.com/cinnabar-forge/eslint-plugin/releases/tag/v0.5.0
[0.4.0]: https://github.com/cinnabar-forge/eslint-plugin/releases/tag/v0.4.0
[0.3.0]: https://github.com/cinnabar-forge/eslint-plugin/releases/tag/v0.3.0
[0.2.1]: https://github.com/cinnabar-forge/eslint-plugin/releases/tag/v0.2.1
[0.2.0]: https://github.com/cinnabar-forge/eslint-plugin/releases/tag/v0.2.0
[0.1.0]: https://github.com/cinnabar-forge/eslint-plugin/releases/tag/v0.1.0

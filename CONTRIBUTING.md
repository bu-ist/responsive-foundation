# Contributing to Responsive Foundation

Make sure that you've reviewed the [BU Coding Standards](https://github.com/bu-ist/coding-standards/) before making any changes in this repository.

## Development & Release Workflow

All development should occur in the `develop` branch, or in specialized [topic branches](http://git-scm.com/book/en/v2/Git-Branching-Branching-Workflows#Topic-Branches) which are merged in to `develop` as they are completed.

When a feature or bug fix is ready for release, changes should be merged from `develop` in to the `master` branch and given a unique release tag. Release tags should follow [semantic versioning](http://semver.org/):

> Given a version number MAJOR.MINOR.PATCH, increment the:
>
> 1. MAJOR version when you make incompatible API changes,
> 2. MINOR version when you add functionality in a backwards-compatible manner, and
> 3. PATCH version when you make backwards-compatible bug fixes.

Before a release is tagged, the [change log](CHANGELOG.md) should be updated to highlight changes since the previous release, and all version references in source files should be bumped to reflect the new version. (Just run `grunt version`).

## Sass

Sass files are separated into two layers.

### Base

Base components live in the [css-dev/burf](css-dev/burf) directory:

* [Reset](css-dev/burf/_reset.scss)
* [Responsive Grid](css-dev/burf/_grid.scss)
* [Fonts](css-dev/burf/_fonts.scss)
* [Typography](css-dev/burf/_typography.scss)

Global mixins utilized by these base components are located in [css-dev/burf/_mixins.scss](css-dev/burf/_mixins.scss).

Variables defined in this framework should always be defined using the [!default](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#variable_defaults_) flag so that they can be easily overridden.

### Theme

The theme layer is importable by way of [css-dev/burf-theme.scss](css-dev/burf-theme.scss), which imports components from the [css-dev/burf-theme](css-dev/burf-theme) directory.

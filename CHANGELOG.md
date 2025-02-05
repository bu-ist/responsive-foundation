# Changelog

## Unreleased

- test...

## 3.2.4

- Fixes #269 by increasing the specificity of the .profile-item-advanced medium breakpoint styles that clear the floats.

## 3.2.3

- hotfix: #269 Layout issue for Profiles Advanced View.

## 3.2.2

- Adds Medium, Medium Alt, and Rhett support to default icons.

## 3.2.12

- Fixes a bug with dropdowns in IE11 and Edge related to `:focus-within`.

## 3.2.11

- Fixes missing support for several BU Default Icons.

## 3.2.1

- Refactors styling targeting Framework's single event view on the calendar
  template, so custom fields + standard fields can be styled the same way
  without very specific selectors.

## 3.2.01

- Fixes the same issue in burf-tools as in 3.2.0, but for the grunt version.

## 3.2.0

- Adds `grunt-postcss` and `autoprefixer`.
- Adds a helper `aspect-ratio` mixin.
- Adds a new function, `accessible-text()`, which returns WCAG 2.0-compliant
  text colors when given a background color and desired text color.
- Adds es6 functionality via a variety of npm packages and Gruntfile
  modifications:
    - `grunt-browserify`: Provides ability to use `require` for separating files into
      modules. Polyfills `require` for the browser.
    - `babelify`: Provides a transform for browserify so we can leverage
      `import` and `export` features that will transpile into something
      browserify can interpret for the browser.
    - `@babel/core`: Required babel library for `babelify` package.
    - `@babel/preset-env`: The recommended "smart" preset for configuring babel
      to take advantage of latest es6 features.
    - `grunt-contrib-uglify`: For minifying the resulting es5 code from
      browserify, and providing source maps.
    - `browserify-shim`: makes CommonJS incompatible files browserifyable (files
      that don’t support `require` from the CommonJS module syntax). This
      includes things like our version of jQuery, but can be extended for any
      library that cannot be included using latest es6 sytax style `import`
      statements. Shims are specified in package.json
    - `eslint`, `eslint-config-airbnb`, `eslint-plugin-import`,
      `eslint-plugin-jsx-a11y`, `eslint-plugin-react`: For code climate and
      text editors to lint and autofix their code. Configured using the popular
      airbnb standard for starters, but with slight modifications to allow tabs
      over spaces and unresolved imports so that global version of jQuery can be
      imported.
    - `grunt-contrib-clean`: Clears contents of directories for new compiled
      files to reside in, so that old irrelevant files don't stick around.
- Adds `grunt-sass-lint` for separate `grunt sasslint` task.
- Adds `browserslist` to package.json so front-end tooling packages like `babel`
  and `autoprefixer` can share the same configurations
  for browser support.
- Adds `.eslint` configuration file
- Adds `theme.js` in the js-dev directory. This acts as an entry point for all
  modules such as `toggle.js` to be imported into.
- Refactors `Gruntfile.js` and `toggle.js` to be written in es6
- Updates sassdoc to take advantage of latest js workflow changes.
- Adds browserify-shim to allow import of global version of jQuery that should
  already exist on the page.
- Fixes broken paths in imports of sass partials.
- Updates codeclimate to use eslint-5 and sass-lint instead of scss-lint which
  will eventually be deprecated or will not support latest sass features.
- Adds `.sasslintrc` for grunt sasslint command and code climate.
- Adds missing `bs-html-injector` package for the browserSync task.
- Updates dependencies to resolve warnings about security vulnerabilities.
- Updates `_tools-cgb.scss` with new icons implementation introduced in version
  `3.1.0`.
- Adds improved styling to Edit links throughout burf-theme.

## 3.1.0

- Replaces `grunt-contrib-sass` with `grunt-sass` (uses `node-sass` under the hood)
- Uses full path to node modules depenencies, rather than depending on loadPath
- Small bugfixes when trying to compile sass locally in this repo, due to
incorrect paths.
- Add a new partial, `burf-tools`, for minimal uses of Foundation
- Adds mega menu support for child themes by default.
- Fixes an issue preventing the icons mixin from being used inside media queries
- Icon placeholders and classes are now generated from the $icons-responsive map
- Adds the ability to change the before/after placement of icons globally across
the theme
- Fixes skip link issues [#173](https://github.com/bu-ist/responsive-foundation/issues/173)
- Fixes a spacing issue with hidden page titles [#174](https://github.com/bu-ist/responsive-foundation/issues/174)
- Adds variable to control gallery margin [#174](https://github.com/bu-ist/responsive-foundation/issues/174)
- Fixes [#103](https://github.com/bu-ist/responsive-foundation/issues/103)
- Fixes [#97](https://github.com/bu-ist/responsive-foundation/issues/97) with new `$padding-banner` and `$padding-banner-window-width` variables
- Fixes [#84](https://github.com/bu-ist/responsive-foundation/issues/84)

## 3.0.1

- Correct paths from bower_components to node_modules.
- Remove additional bower references.

## 3.0.0

- NPM all the things!
- Remove Bower.

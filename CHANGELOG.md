# Changelog

## Unreleased

## 4.0.0

* Adds CSS Grid support to the grid, with an automatic fallback to floats
  for unsupported browsers.
* Adds support for color stops to the linear gradient mixin. New syntax:
  `@include linear-gradient(to right, #E47D7D 0%, #C195D3 50%, #4FB4E8 100%);`
* Ensures BU Hub required icons are always output, even if you turn icons off.
* Adds a skip link mixin and moves styles to the accessibility partial.
* Fixes https://github.com/bu-ist/responsive-foundation/issues/208
* Adds support for KSS documentation and officially switches us from SassDoc

## 3.2.2

* Adds Medium, Medium Alt, and Rhett support to default icons.

## 3.2.12

* Fixes a bug with dropdowns in IE11 and Edge related to `:focus-within`.

## 3.2.11

* Fixes missing support for several BU Default Icons.

## 3.2.1

* Refactors styling targeting Framework's single event view on the calendar
  template, so custom fields + standard fields can be styled the same way
  without very specific selectors.

## 3.2.01

* Fixes the same issue in burf-tools as in 3.2.0, but for the grunt version.

## 3.2.0

* Adds `grunt-postcss` and `autoprefixer`.
* Adds a helper `aspect-ratio` mixin.
* Adds a new function, `accessible-text()`, which returns WCAG 2.0-compliant
  text colors when given a background color and desired text color.
* Adds es6 functionality via a variety of npm packages and Gruntfile
  modifications:
    * `grunt-browserify`: Provides ability to use `require` for separating files into
      modules. Polyfills `require` for the browser.
    * `babelify`: Provides a transform for browserify so we can leverage
      `import` and `export` features that will transpile into something
      browserify can interpret for the browser.
    * `@babel/core`: Required babel library for `babelify` package.
    * `@babel/preset-env`: The recommended "smart" preset for configuring babel
      to take advantage of latest es6 features.
    * `grunt-contrib-uglify`: For minifying the resulting es5 code from
      browserify, and providing source maps.
    * `browserify-shim`: makes CommonJS incompatible files browserifyable (files
      that don’t support `require` from the CommonJS module syntax). This
      includes things like our version of jQuery, but can be extended for any
      library that cannot be included using latest es6 sytax style `import`
      statements. Shims are specified in package.json
    * `eslint`, `eslint-config-airbnb`, `eslint-plugin-import`,
      `eslint-plugin-jsx-a11y`, `eslint-plugin-react`: For code climate and
      text editors to lint and autofix their code. Configured using the popular
      airbnb standard for starters, but with slight modifications to allow tabs
      over spaces and unresolved imports so that global version of jQuery can be
      imported.
    * `grunt-contrib-clean`: Clears contents of directories for new compiled
      files to reside in, so that old irrelevant files don't stick around.
* Adds `grunt-sass-lint` for separate `grunt sasslint` task.
* Adds `browserslist` to package.json so front-end tooling packages like `babel`
  and `autoprefixer` can share the same configurations
  for browser support.
* Adds `.eslint` configuration file
* Adds `theme.js` in the js-dev directory. This acts as an entry point for all
  modules such as `toggle.js` to be imported into.
* Refactors `Gruntfile.js` and `toggle.js` to be written in es6
* Updates sassdoc to take advantage of latest js workflow changes.
* Adds browserify-shim to allow import of global version of jQuery that should
  already exist on the page.
* Fixes broken paths in imports of sass partials.
* Updates codeclimate to use eslint-5 and sass-lint instead of scss-lint which
  will eventually be deprecated or will not support latest sass features.
* Adds `.sasslintrc` for grunt sasslint command and code climate.
* Adds missing `bs-html-injector` package for the browserSync task.
* Updates dependencies to resolve warnings about security vulnerabilities.
* Updates `_tools-cgb.scss` with new icons implementation introduced in version
  `3.1.0`.
* Adds improved styling to Edit links throughout burf-theme.

## 3.1.0

* Replaces `grunt-contrib-sass` with `grunt-sass` (uses `node-sass` under the hood)
* Uses full path to node modules depenencies, rather than depending on loadPath
* Small bugfixes when trying to compile sass locally in this repo, due to
incorrect paths.
* Add a new partial, `burf-tools`, for minimal uses of Foundation
* Adds mega menu support for child themes by default.
* Fixes an issue preventing the icons mixin from being used inside media queries
* Icon placeholders and classes are now generated from the $icons-responsive map
* Adds the ability to change the before/after placement of icons globally across
the theme
* Fixes skip link issues [#173](https://github.com/bu-ist/responsive-foundation/issues/173)
* Fixes a spacing issue with hidden page titles [#174](https://github.com/bu-ist/responsive-foundation/issues/174)
* Adds variable to control gallery margin [#174](https://github.com/bu-ist/responsive-foundation/issues/174)
* Fixes [#103](https://github.com/bu-ist/responsive-foundation/issues/103)
* Fixes [#97](https://github.com/bu-ist/responsive-foundation/issues/97) with new `$padding-banner` and `$padding-banner-window-width` variables
* Fixes [#84](https://github.com/bu-ist/responsive-foundation/issues/84)

## 3.0.1

* Correct paths from bower_components to node_modules.
* Remove additional bower references.

## 3.0.0

* NPM all the things!
* Remove Bower.

## 2.1.12

* Fixed size and positioning of skip-link.
* Migrate from Bower to npm for frontend dependencies

## 2.1.11
* Fixes an issue with external linking. This is a required update for all 2.0 themes.

## 2.1.1
* Adds skip-link feature for keyboard navigation. This is a required update for all 2.0 themes.

## 2.1.0
* Color contrast accessibility fixes to comply with MWAS
* Fixed a bug with the left hand nav layout and BU Banners [See related pull request](https://github.com/bu-ist/responsive-foundation/pull/154)
* Fixed a bug with the search box in IE [See related pull request](https://github.com/bu-ist/responsive-foundation/pull/156)
* Fixed a bug with the profile single photos [See related pull request](https://github.com/bu-ist/responsive-foundation/pull/159)
* Added snapchat icons [See related pull request](https://github.com/bu-ist/responsive-foundation/pull/160)

# 2.0.2

* BU Banner, Navigation and search styles updated.
* Audit and accessibility updates.
* Updates to the readme.
* Incorporated adjustments to line height for BU Hub Indicator.

# 2.0.1

* Adds support for BU Hub Indicator within Course Feeds.

## 2.0.0

* Support for typography mixins
* Support for icon placement using a brand new icon mixin: `@include icon( "facebook" "after" );`,
which will continue to default to `before` just like it always has
* Support for grid mixins like so: `@include col( $xs, half );`
* Adds a new angles mixin [See related pull request](https://github.com/bu-ist/responsive-foundation/pull/94)
* Adds utility classes for quick prototyping: `u-visually-hidden`,
`u-clearfix`, `u-hide-text`, `u-hide`, `u-show` [See related pull request](https://github.com/bu-ist/responsive-foundation/pull/93)
* Change font name from "Benton" to "Benton-Sans" to align with CDN and fix
[this issue](https://github.com/bu-ist/responsive-foundation/issues/50) [See related pull request](https://github.com/bu-ist/responsive-foundation/pull/89)
* Simplify the breakpoint mixin to accept any variable, and open up the target
breakpoint for <=IE8 to modification in custom themes. Use any value you like,
it'll just work now! `max-width` support is deprecated as of 2.0 since the
intention of this mixin is to print styles safely in older versions of IE -
`max-width` styles are unlikely to be the last styles to apply.
[See related pull request](https://github.com/bu-ist/responsive-foundation/pull/89)
* A new approach for centering, `center-children`, using flexbox. Old
approaches will still be available for the forseeable future - just use
`vertical-center-ie8` or `vertical-center-ie9` as appropriate for your needs
[See related pull request](https://github.com/bu-ist/responsive-foundation/pull/89)
* Documentation for mixins and change `%visuallyhidden` to `%visually-hidden`
to comply with coding standards for naming [See related pull request](https://github.com/bu-ist/responsive-foundation/pull/89)
* The `animation` and `transition` mixins now support multiple declarations by default
[See related pull request](https://github.com/bu-ist/responsive-foundation/pull/89)
* Standardizes border treatments by adding a new `$border` for global border treatments
and removing width variables which don't get a lot of use [See related pull request](https://github.com/bu-ist/responsive-foundation/pull/88)
* Adds a new z-index scale to help manage layering of multiple interactive elements [See related pull request](https://github.com/bu-ist/responsive-foundation/pull/87)
* Introduces `$padding`, `$padding-small`, and `$padding-large` as part of the variables
cleanup effort [See related pull request](https://github.com/bu-ist/responsive-foundation/pull/82)
* Introduces `$margin`, `$margin-small`, and `$margin-large` as part of the variables
cleanup effort [See related pull request](https://github.com/bu-ist/responsive-foundation/pull/78)
* Tint your grays with ease using the brand new `$tint-hue` and `$tint-saturation`!
[See related pull request](https://github.com/bu-ist/responsive-foundation/pull/75)
* `%template-narrow` and `%remove-template-narrow` are deprecated in favor of new PHP
filters in Framework [See related pull request](https://github.com/bu-ist/responsive-foundation/pull/72)
* Navigation JS now follows coding standard, with bonus caching
[See related pull request](https://github.com/bu-ist/responsive-foundation/pull/71)
* BRAND NEW ORGANIZATION! You can finally override variables in the same file as your
custom Sass [See related pull request](https://github.com/bu-ist/responsive-foundation/pull/70)
* A global, responsive typography scale - set `$min-size-headings` and `$max-size-headings`,
and let Foundation take care of the math for you. Mobile min/max included
[See related pull request](https://github.com/bu-ist/responsive-foundation/pull/67)
* Finally fixed that left hand layout bug where the nav would get cut off when no content
was in [See related pull request](https://github.com/bu-ist/responsive-foundation/pull/56)
* Duplicated navigation removed to improve accessibility
[See related pull request](https://github.com/bu-ist/responsive-foundation/pull/54)
* Switch from camelCase-and-hyphensToo to just hyphens to match WordPress coding
standards [See related pull request](https://github.com/bu-ist/responsive-foundation/pull/51)
* You asked for it! The transition mixin now supports multiple transitions by default
[See related pull request](https://github.com/bu-ist/responsive-foundation/pull/49)
* Added by popular demand: a new `$xl` breakpoint and variable
[See related pull request](https://github.com/bu-ist/responsive-foundation/pull/48)
* Adds a variable for unbranded color in branding
[See related pull request](https://github.com/bu-ist/responsive-foundation/pull/46)
* Better compliance with licensing rules for Normalize and Pure CSS
[See related pull request](https://github.com/bu-ist/responsive-foundation/pull/59)
* Assortment of bug fixes

# 1.4.2

* Fixes missing parenthesis in gallery Sass to make Foundation compatible with libsass

# 1.4.1

* Fixes a typo in classes for BUMC branding

## 1.4.0

* Adds styles and support for new [bu-branding](https://github.com/bu-ist/bu-branding) options
* Adds styles for the new sidebar placement options
* HTTPS update for customizer font palettes
* Fixes color palettes styling bugs on news and profile pages
* Fixes a number of other minor bugs
* *Breaking change:* `$sidebar-padding` switches to a single value from the padding shorthand

## 1.3.2

* Removes typo in class on `_grid.scss`

## 1.3.1

* Fixes for margin classes in `_grid.scss`
* Adds `col-margin-parent` classes and placeholders

## 1.3.0

* Grid fixes for the `lg` breakpoint
* Added support for SSL
* Added support for search accessibility
* Added auto-focusing to search input field after search open click
* Many edits for Branding considerations


## 1.2.1

* Merging branch `develop` into `master`
* Additional styles for "latest posts" front page display
* Re-enabled push/pull grid classes

## 1.2.0

* Merging branch `ashley` into `develop`
* Bug fixes
* Changed grid classes
* Footer widget fixes
* Using more placeholders
* Variables organized by templates
* [Full List of Changes](/bu-ist/responsive-foundation/pull/10)

## 1.1.0

* Responsi-as-a-Service beta release (1.3.0-beta)
* Customizer font palette updates
* Footer styles for BUMC logo and disclaimer link

## 1.0.5

* Add fallback for branding (#34). Props ashleykolodziej.

## 1.0.4

* Add alternate social icons from [BU Icon Font](https://github.com/bu-ist/bu-icon-font)
* Add social footer link selectors for Dropbox, Pocket, Reddit, Vimeo and Vine
* Fix social footer link selector for Google+
* Fix Flickr / Vine glyphs (Fixes [bu-ist/responsive-framework#19](/bu-ist/responsive-framework/issues/19))

## 1.0.3

* Fix issue with .button font-family (#7). Props ashleykolodziej.

## 1.0.2

* Adding push, pull, and offset classes back into grid.scss

## 1.0.1

* Lots of new variables (see b6ac547505e5ec16508f815a25efffa1a50a2f0d)
* Theme: Fix content width for no-sidebars template
* Theme: Fix image alignment issues
* Theme: Padding adjustments for footbar, sidenav layout
* Theme: Refactor header styles
* Base: Remove `unicode-range` property from icons to fix compile issues with `grunt-sass`

## 1.0.0

* Deemed stable for child theme development

## 0.1.0

* Initial release

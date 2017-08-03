# Changelog

## 2.0.0-dev

* Change font name from "Benton" to "Benton-Sans" to align with CDN and fix
[this issue](https://github.com/bu-ist/responsive-foundation/issues/50) [See related pull request](https://github.com/bu-ist/responsive-foundation/pull/89)
* Simplify the breakpoint mixin to accept any variable, and open up the target
breakpoint for <=IE8 to modification in custom themes. Use any value you like,
it'll just work now! `max-width` support is deprecated as of 2.0 since the
intention of this mixin is to print styles safely in older versions of IE -
`max-width` styles are unlikely to be the last styles to apply.
[See related pull request](https://github.com/bu-ist/responsive-foundation/pull/89)
* An new approach for centering, `center-children`, using flexbox. Old
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

## 1.4.1

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
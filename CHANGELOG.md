# Changelog

## Unreleased

## 5.0.4
- Icon Changes: 
  - Move Twitter icon from FontAwsome list to BU Default Icons list so the updated X icon is used from BU Default Icons vs the Bird icon from FontAwesome for `icon-twitter`.
  - Add BU Hub Wide icon `icon-buhub-wide`. Use by calling `@extend %icon-buhub-wide;` This icon is the same as `icon-buhub` but has additional style overrides to scale it up.
  - Add BU Hub Alt icon `icon-buhub-alt`.  Use by calling `@extend %icon-buhub-alt;`
- Bug fix: Restore dependency needed for compiling burf-tools in projects that use it. 


## 5.0.3
- Bug fix: Restore dependencies needed for compiling in themes. 

## 5.0.2

- Fix version typo.

## 5.0.1

- Fix name of `icon-link` from the incorrect `icon-link-alt` to `link-alt` in icons\supported.scss.
- Fix #247 - BU Profiles Post title not centered.
- Add Blusky and X icons via BU Default Icons font.
- Change how FontAwesome Brand icons are handled so the Fontawesome brands font is applied automatically via the icon mixin
- Change how BU Default Icons are handled so the BU Default Icons font is applied automatically via the icon mixin

## 5.0.0-alpha.7

* Officially publishes to npm under the @bostonuniversity account!
- Removes support for the tripadvisor icon in FontAwesome

## 5.0.0-alpha

- Fixes #235
- Removes BU Default Icons
- Adds FontAwesome Free and FontAwesome Brands
- Adds a new variable, `$font-weight-icon`, to control which set of FontAwesome icons loads
- `$widget-title-link-after` has been deprecated in favor of `$widget-title-link-icon`
- Removes pre-IE9 support for icons, per FontAwesome standard.
- Moves to Github Packages for releases.
- Renames `tools-cgb` to `tools-webpack`.
- Reorganizes foundation into `burf-base`, `burf-theme`, `burf-tools`, and a new `burf-customizations`
- Migrates the following partials from `burf-theme` to `burf-customizations`:
  - `content/collapsibles`;
  - `content/courses`;
  - `profiles/profile-format-default`;
  - `profiles/profile-format-basic`;
  - `profiles/profile-format-advanced`;
  - `profiles/profile-format-mini`;
  - `content/slideshows`;
  - `calendar/widget-calendar`;
  - `calendar/calendar-picker`;
  - `layout/branding`;
  - `calendar/calendar-archive`;
  - `profiles/profile-archive`;
  - `calendar/calendar-single`;
  - `profiles/profile-single`;
  - `bulp/bulp-base`;
- Migrates the following partials from `burf-base` to `burf-customizations`:
  - `fonts`;
- Migrates the following folders from `responsive-foundation` to `burf-theme`:
  - `js`;
  - `js-dev`;

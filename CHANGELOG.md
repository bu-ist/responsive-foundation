# Changelog

## Unreleased

## 4.0.2

- Add icons for X, X-alt, and bluesky to icons and social menus.
- `npm audit fix`
- Adds .nvmrc
- Fixes #276 toggle menu aria-label

## 4.0.1

- Security updates.

## 4.0.0

- Adds CSS Grid support to the grid, with an automatic fallback to floats for unsupported browsers.
- Adds support for color stops to the linear gradient mixin. New syntax: `@include linear-gradient(to right, #E47D7D 0%, #C195D3 50%, #4FB4E8 100%);`
- Ensures BU Hub required icons are always output, even if you turn icons off.
- Adds a skip link mixin and moves styles to the accessibility partial.
- Fixes https://github.com/bu-ist/responsive-foundation/issues/208
- Adds support for KSS documentation and officially switches us from SassDoc

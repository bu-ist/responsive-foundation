# BU Base CSS Properties

## Primitive

Primitive properties are the "first layer" -- they're un-opinionated elements that will then be used in themes, plugins, etc. Essentially the lego pieces.

The following primitive properties are available in BU Base:

- Aspect Ratios (`--ratio-`)
- Border Widths (`--border-size-`) - 1-5
- Border Radii (`--radius-`) - none, 1-7, round
- Box Shadow (`--shadow-`) - xs, sm, md, lg, xl
- Transition Duration (`--duration-`)
- Easing (`--ease-`)
- Spacing (`--size-`) - 0-10
- Fluid Spacing (`--size-fluid-`) - 1-12 and gap
- Grid (`--grid-template-`) - 2-12
- Font Family Stacks (`--font-`)
- Font Weights (`--font-weight-`)
- Line Height (`--line-height-`) - 0-5
- Letter Spacing (`--letter-spacing-`) - 00-4
- Fluid Header Sizes (`--heading-size-`) - 1-5
- Fluid Text Sizes (`--text-size-`) - xs, sm, md
- Z-Index (`--z-`)

## Semantic

Semantic properties are the "second layer" -- a starter kit that takes the lego pieces provided in primitive properties and starts applying them to specific applications.

The following semantic properties are available in BU Base:

- Border (`--bu-border`)
- Shadow (`--bu-shadow`)
- Duration (`--bu-duration`)
- Ease In (`--bu-ease-in`)
- Ease Out (`--bu-ease-out`)
- Ease In Out (`--bu-ease-in-out`)
- Spacing (`--bu-spacing`)
- Spacing Fluid (`--bu-spacing-fluid`)
- Block Margin Spacing (`--bu-block-spacing`)
- Font Family Serif (`--bu-font-serif`)
- Font Family Sans (`--bu-font-sans`)
- Font Family Mono (`--bu-font-mono`)
- Line Height (`--bu-line-height`)
- Letter Spacing (`--bu-letter-spacing`)
- Headings (`--bu-heading-`)
- Text (`--bu-text-`)
- Label (`--bu-label-`)
- Color Primary (`--bu-color-primary`)
- Color Accent (`--bu-color-accent`)
- Link Color (`--bu-link-color`)
- Focus Color (`--bu-focus-color`)
- Gutter (`--bu-gutter`)
- TODO: Once we finalize the rest of the Layout Variables, these need to be updated in this file
- Surface (`--bu-surface`)

## Components

We've also included some properties for components to be used throughout our themes and plugins:

- Button (`--bu-button-`)

### Naming Convention

Naming of properties should follow the pattern of `--[prefix]-[semantic]-[property]-[modifier]--[state]` for consistency.
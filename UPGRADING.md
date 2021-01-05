# Upgrading Responsive Foundation

Major versions of Responsive Foundation include breaking changes. This guide
will help you navigate those breaking changes if you need to upgrade your version
of Foundation. Generally speaking, we don't upgrade older themes unless they are
a complete redesign, but you may wish to upgrade to get a new or updated version
of our functionality.

## Updating to 5x

### Uninstall older versions of Foundation

`cd` to your project folder, and run the following commands in Terminal
to remove old versions of Responsive Foundation:

`npm uninstall responsive-foundation --save-dev`

### Configure your development environment for Github Packages

If you haven't already done so at least once on your current computer,
you will need to configure your development environment to work with
Github Packages. You'll do this in two steps:

1. [Generate your Personal Access Token](https://github.com/bu-ist/responsive-foundation#generate-your-access-token)
2. [Add your access token to the global NPM settings (npmrc)](https://github.com/bu-ist/responsive-foundation#add-your-access-token-to-the-global-npm-settings-npmrc)

If you've done this once already, you can move on to the next step!

### Install updated packages

`cd` to your project folder, and run the following commands to install the
latest version of the components you need from Responsive Foundation. Most
likely, this is `burf-base` and `burf-theme`. [See recommended configurations here.](https://github.com/bu-ist/responsive-foundation#install-and-go)

`npm install @bu-ist/burf-base@latest @bu-ist/burf-theme@latest --save-dev`

### Update Gruntfile.js

Do a find and replace in the `Gruntfile.js` file for the following text:

| Text to find                                 | Replace with                         |
| -------------------------------------------- | ------------------------------------ |
| `node_modules/responsive-foundation/css-dev` | `node_modules/responsive-foundation` |


### Update import paths

Do a find and replace in the `css-dev` folder for the following text:

| Text to find                      | Replace with                               |
| --------------------------------- | ------------------------------------------ |
| `burf-base/fonts`                 | `burf-customizations/fonts`                |
| `burf-theme/bulp`                 | `burf-customizations/bulp`                 |
| `burf-theme/calendar`             | `burf-customizations/calendar`             |
| `burf-theme/content/collapsibles` | `burf-customizations/content/collapsibles` |
| `burf-theme/content/courses`      | `burf-customizations/content/courses`      |
| `burf-theme/content/slideshows`   | `burf-customizations/content/slideshows`   |
| `burf-theme/layout/branding`      | `burf-customizations/layout/branding`      |
| `burf-theme/profiles`             | `burf-customizations/profiles`             |

More details on the exact changes are here: https://github.com/bu-ist/responsive-foundation/releases/tag/5.0.0

## Updating to 4x

Add a step by step process for upgrades here.

## Updating to 3x

Add a step by step process for upgrades here.

## Updating to 2x

Add a step by step process for upgrades here.

Based on newly defined coding standards established in October 2014 by the BU Webteam, Responsive Foundation files have changed. Changes include restructuring, reformatting, recommenting, and renaming of SCSS partials and some JavaScript.

More details on the exact changes are here: https://github.com/bu-ist/responsive-foundation/releases/tag/2.0.0

### SCSS Renaming Map

#### Grayscale color variables

* $black --> $grayScale-0
* $gray_darkest --> $grayScale-1
* $gray_darker --> $grayScale-2
* $gray_dark --> $grayScale-3
* $gray_light --> $grayScale-7
* $gray_lighter --> $grayScale-9
* $white --> $grayScale-f

#### Breakpoint variables

* $container_S: --> $container-S
* $container_M: --> $container-M
* $container_L: --> $container-L

#### Class and ID Names

* #page_wrapper --> .wrapper
* #utility --> .utilityNav
* #right-content-area --> .sidebar
* #bottom-content-area --> .footbar
* .responsive-video --> .responsiveVideo
* .banner-container --> .bannerContainer
* .window-width --> .bannerContainer-windowWidth (check child themes, like research, for content banner changes)
* .page-width --> .bannerContainer-pageWidth
* .content-width --> .bannerContainer-contentWidth
* .open --> .is-open
* .navopen --> .nav-open (also changed in toggle.js, and needs to be adjusted in cfa theme)

##### Remanimg. Again.

* #nav --> .primary-nav-menu --> .primaryNav-menu
* #nav --> .primaryNav-menu --> .primary-nav-menu-menu
* .mainNav --> .navContainer --> .primary-nav
* .contentWrapper --> .content
	* .container --> .content-container
* .footbar .container --> .footbar .footbar-container

### Additions

* z-index scale in _variables.scss
* sidebar widget border colors, sidebar widget background colors, page grid border colors, page grid background colors, footbar widget border colors in _variables.scss


### Restructuring

* header.php: added <div class="wrapper">, <div class="contentWrapper"> before bu_content_banner function (line 113, 114)
* footer-no-sidebar.php, footer.php: added </div><!-- .contentWrapper -->, </div><!-- .wrapper --> after <?php wp_footer(); ?>
* separated navigation styles in to their own partial: _navigation.scss (in burf-theme)

#### Grid variables

* $grid-rowMargin
* $grid-columnPadding

### TODO

* Remove any instance of generic grid classes from template markup, e.g. `.col-md-8` and instead use `@extend`
* Create global typography styles that work for all content, including widgets, without specifically having to target `<article>`. Overrides should be applied to all other areas, e.g. the `primary-nav-menu`.
* rgba colors are not consistently using mixin or don't have have solid fallback (e.g. in `.footbar`)

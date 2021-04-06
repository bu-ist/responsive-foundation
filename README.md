[![Welcome to Boston University Responsive Foundation 5.0. Install now](https://user-images.githubusercontent.com/1828613/103576393-11302080-4ea1-11eb-8ed8-a1d08a1cdb67.jpg)](#installation) 

# What is Responsive Foundation?

Responsive Foundation is Boston University's front-end development framework. Built in Sass and JavaScript, Foundation powers the frontend of custom WordPress themes, longform editorial work, and special projects such as our Annual Report. It is maintained by the [Boston University Interactive Design team](https://www.bu.edu/interactive-design/).

All packages in this repository except `burf-customizations` are open sourced under the [GPL-3.0-or-later](https://spdx.org/licenses/GPL-3.0-or-later.html) license. Feel free to use them in your projects!

**Contribute!** If you'd like to contribute, check out some of our [open issues in Mission Control](https://bu-ist.github.io/responsive-foundation/dashboard.html).

## About

Foundation provides a library of [Sass](http://sass-lang.com/) and Javascript files that serve as a foundation for building responsive sites. This library is designed to be imported into your project using [npm](https://www.npmjs.com/). We used the most useful parts of the [Bootstrap](https://github.com/twbs/bootstrap) and [Foundation](https://github.com/foundation/foundation-sites) CSS frameworks, and built on top of them to provide a more Sass-friendly port that was easier for us to maintain. Over the years, it has grown into its own project, with the most significant changes being made in the grid, which is built on the fly using Sass variables. Our framework uses CSS Grid first and foremost, with an optional fallback to floats for browsers which don't support it. Pretty neat, right?

We also have systems for easily defining responsive typography, tinting grays, and a few other neat tricks up our sleeve. The philosophy of this framework is to give you a wide variety of helpful tools, but make it very easy and intuitive to only use (and print out) the parts you need. Just about all utilities have placeholders as well as a matching mixin, in case you need it. Utility CSS classes are also available, but won't print out to the compiled CSS by default. Similarly, we've mapped [FontAwesome Free](https://github.com/FortAwesome/Font-Awesome/tree/master/js-packages/%40fortawesome/fontawesome-free) to a set of icon placeholders to get you up and running quickly with all the great icons. By using the power of Sass placeholders, your compiled CSS will only have the icons and styles you explicitly decide to use, which means your compiled styles stay neat, tidy, and trim.

It was initially conceived during the build for our custom WordPress theme framework as a way to share common front-end assets among themes, but does not have an WordPress-specific bindings and can be used for non-WordPress projects as well.

Note that this repository does not include any production-ready assets (e.g. minified, compressed). The build process is entirely up to you. We've personally tested this with both Grunt and Webpack.

## Installation

We recommend installing Foundation using Node Package Manager (npm). You can learn more about how to install npm
here: https://www.npmjs.com/get-npm

### Generate your access token

This repository uses Github Packages to manage packages. To install it, you'll need to create a [Github Personal Access Token](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token) with the `read:packages` scope only. This only needs to happen once!

### Add your access token to the global NPM settings (npmrc)

After you've generated your personal access token, you can update your global `.npmrc` so that anytime you want to use a package from Responsive Foundation, you can just install and go. You'll only need to do this once. In a new Terminal window, run the following commands, replacing `YOURTOKENHERE` with the Personal Access Token you generated above:

`npm config set "@bu-ist:registry" https://npm.pkg.github.com`

Then run:

`npm config set "//npm.pkg.github.com/:_authToken" YOURTOKENHERE`

**If you're working on an existing theme or plugin that's been upgraded to Foundation 5.0, stop here!** You don't need to do anything else. Hop back over to your project and get working!

Otherwise, instructions for choosing the best package for your project are below.

## Choose your package and go!

Once you're set up, you can install Foundation in your project directory like so (be sure to `cd` first!). You can choose from any of the following setups depending on your project's needs:

- **WordPress Themes**
	- We recommend using  the `burf-theme` package when working with WordPress themes.
	- To install, run `npm install --save-dev @bostonuniversity/burf-theme@latest`.
	- **Boston University themes only:** See below for instructions on how to install BU-specific styles.
- **Websites Outside of WordPress** 
	- If you are building a website outside of WordPress and don't already have your own CSS reset and basic styles for HTML elements, `burf-base` is probably the best match for you.
	- To install, run `npm install --save-dev @bostonuniversity/burf-base@latest`.
- **Plugins and Code Inside Existing Websites** 
	- If you already have a CSS reset, or plan to use this code in an environment where you only want the absolute minimum amount of CSS to print (such as a WordPress plugin or code for a single page inside of an existing website), `burf-tools` gives you access to all of the mixins, extends, and functionality of Responsive Foundation without any of the fluff whatsoever.
	- To install, run `npm install --save-dev @bostonuniversity/burf-tools@latest`.
- **Official Boston University WordPress Themes** 
	- Official Boston University websites which reside on our servers should also install `burf-customizations`. These additional styles are meant to work with our customized WordPress environment, including our university-specific plugins.
	- Please note that only employees of Boston University Interactive Design or IS&T are authorized to use or grant access to this package. 
	- To install everything you need for an official Boston University website, run `npm install --save-dev @bostonuniversity/burf-customizations@latest`.

## Sass Usage

Responsive Foundation Sass files are split as follows:

- **burf-base** contains Sass, mixins, resets, and basic styling for HTML that can apply to any
project.
- **burf-theme** contains styling specific to WordPress, and requires burf-base.
- **burf-tools** is a bare, minimalistic partial intended for plugin development or projects where
you are adding to a pre-existing reset or stylesheet. It is set up to not print any CSS by default,
and includes support for variables, mixins, the grid, icons, and typography only - in other words,
all the "tools" you might want to use, without the bloat.
- **burf-customizations** contains styles specific to Boston University websites, and should only be used
for websites which reside in Boston University's official WordPress environment. These are not available 
for public or open source use.

## Get moving quickly

You can get moving quickly by importing the full package in your Sass:

```sass
# css-dev/style.scss:

// Import base layer
@import "burf-base";

// Import theme layer
@import "burf-theme";
```

You can also choose to import individual partials. Individual build tool setups vary, but if you
are using [grunt-sass](https://github.com/sindresorhus/grunt-sass) to manage compiling your Sass,
you can use the [`includePaths` option](https://github.com/sass/node-sass#includepaths) to simplify 
your import paths by adding the folder path to Responsive Foundation in `node_modules`. 

For a highly customizable implementation of Foundation that leans heavily on customization with
Sass variables, see the [Responsive Child Starter package](https://github.com/bu-ist/responsive-child-starter).

Full usage documentation can be found in our [style guide](https://bu-ist.github.io/responsive-foundation/).

## Actively maintained versions

After each major release, one version is maintained until everyone can be upgraded to the next major version. Currently, these versions are maintained for the purposes of hotfixes only:

* 0.1.0.2
* 1.0.4.2
* 1.4.1
* 1.4.2.2

## Upgrading to 5.0.0

Version `5.0.0` is a major update that will require you to reconfigure some of your settings in order for your builds to run correctly. Head to [UPGRADING.md](/UPGRADING.md) to find out what you'll need to do.

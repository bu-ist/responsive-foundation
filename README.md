# Responsive Foundation

Responsive Foundation is Boston University's front-end development framework. Built in Sass and JavaScript, Foundation powers the frontend of custom WordPress themes, longform editorial work, and special projects such as our Annual Report. 

This framework is currently internal, and may not be used without permission.

Foundation provides a library of [Sass](http://sass-lang.com/) and Javascript files that serve as a foundation for building responsive sites. This library is designed to be imported into your project using [npm](https://www.npmjs.com/).

It was initially conceived during the build for our custom WordPress theme framework as a way to share common front-end assets among themes, but does not have an WordPress-specific bindings and can be used for non-WordPress projects as well.

Note that this repository does not include any production-ready assets (e.g. minified, compressed). The build process is entirely up to the project.

## Installation

We recommend installing Foundation using Node Package Manager (npm). You can learn more about how to install npm
here: https://www.npmjs.com/get-npm

Once you're set up with npm, you can install Foundation in your project directory like so:

```bash
npm install git@github.com:bu-ist/responsive-foundation.git#master
```

This will install the latest version of Responsive Foundation each time you run `npm install`.
To lock to a specific version of Foundation in your project, just change `master` to the number of
the [release](https://github.com/bu-ist/responsive-foundation/releases) you would like to use.

## Sass Usage

Foundation Sass files are split as follows:

- **burf-base** contains Sass, mixins, resets, and basic styling for HTML that can apply to any
project.
- **burf-theme** contains styling specific to WordPress, and requires burf-base.
- **burf-tools** is a bare, minimalistic partial intended for plugin development or projects where
you are adding to a pre-existing reset or stylesheet. It is set up to not print any CSS by default,
and includes support for variables, mixins, the grid, icons, and typography only - in other words,
all the "tools" you might want to use, without the bloat.

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

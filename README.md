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

## Actively maintained versions

Each version is maintained in a separate branch. To learn more about each version, see below.

- [6](https://github.com/bu-ist/responsive-foundation/tree/v6) (in development)
- [5](https://github.com/bu-ist/responsive-foundation/tree/v5) (current)
- [4](https://github.com/bu-ist/responsive-foundation/tree/v4) (hotfixes only)
- [3](https://github.com/bu-ist/responsive-foundation/tree/v3) (hotfixes only)

## Upgrading to 5.0.0

Version `5.0.0` is a major update that will require you to reconfigure some of your settings in order for your builds to run correctly. Head to [UPGRADING.md](https://github.com/bu-ist/responsive-foundation/blob/v5/UPGRADING.md) to find out what you'll need to do.

## Contributing

Follow the instructions in [Framework Development and Release Workflows](https://github.com/bu-ist/responsive-framework/wiki/Framework-Development-and-Release-Workflows) to test your Foundation changes.

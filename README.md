# What is Responsive Foundation?

Responsive Foundation is Boston University's front-end development framework. Built in Sass and JavaScript, Foundation powers the frontend of custom WordPress themes, longform editorial work, and special projects such as our Annual Report. It is maintained by the [Boston University Interactive Design team](https://www.bu.edu/interactive-design/).

All packages in this repository except `burf-customizations` are open sourced under the [GPL-3.0-or-later](https://spdx.org/licenses/GPL-3.0-or-later.html) license. Feel free to use them in your projects!

## About

Foundation provides a library of [Sass](http://sass-lang.com/) and Javascript files that serve as a foundation for building responsive sites.

We used the most useful parts of the [Bootstrap](https://github.com/twbs/bootstrap) and [Foundation](https://github.com/foundation/foundation-sites) CSS frameworks, and built on top of them to provide a more Sass-friendly port that was easier for us to maintain. Over the years, it has grown into its own project, with the most significant changes being made in the grid, which is built on the fly using Sass variables. Our framework uses CSS Grid first and foremost, with an optional fallback to floats for browsers which don't support it. Pretty neat, right?

We also have systems for easily defining responsive typography, tinting grays, and a few other neat tricks up our sleeve. The philosophy of this framework is to give you a wide variety of helpful tools, but make it very easy and intuitive to only use (and print out) the parts you need. Just about all utilities have placeholders as well as a matching mixin, in case you need it. Utility CSS classes are also available, but won't print out to the compiled CSS by default. Similarly, we've mapped [FontAwesome Free](https://github.com/FortAwesome/Font-Awesome/tree/master/js-packages/%40fortawesome/fontawesome-free) to a set of icon placeholders to get you up and running quickly with all the great icons. By using the power of Sass placeholders, your compiled CSS will only have the icons and styles you explicitly decide to use, which means your compiled styles stay neat, tidy, and trim.

It was initially conceived during the build for our custom WordPress theme framework as a way to share common front-end assets among themes, but does not have an WordPress-specific bindings and can be used for non-WordPress projects as well.

Note that this repository does not include any production-ready assets (e.g. minified, compressed). The build process is entirely up to you. We've personally tested this with both Grunt and Webpack.

## Actively maintained versions

Each version is maintained in a separate branch. To learn more about each version, see below.

- [6.0.0-alpha.10](https://github.com/bu-ist/responsive-foundation/tree/v6) `"responsive-foundation": "git+ssh://git@github.com:bu-ist/responsive-foundation#6.0.0-alpha.10"`
- [5.0.5](https://github.com/bu-ist/responsive-foundation/tree/v5) `"responsive-foundation": "git+ssh://git@github.com:bu-ist/responsive-foundation#5.0.5"`
- [4.0.2](https://github.com/bu-ist/responsive-foundation/tree/v4) `"responsive-foundation": "git+ssh://git@github.com:bu-ist/responsive-foundation#4.0.2"`
- [3.2.6](https://github.com/bu-ist/responsive-foundation/tree/v3) `"responsive-foundation": "git+ssh://git@github.com:bu-ist/responsive-foundation#3.2.6"`
- ~2.1.12~ deprecated
- [1.5.1](https://github.com/bu-ist/responsive-foundation/tree/v1) `"responsive-foundation": "git+ssh://git@github.com:bu-ist/responsive-foundation#1.5.1"`
- ~0.1.021~ deprecated

## Contributing

Follow the instructions in [Framework Development and Release Workflows](https://github.com/bu-ist/responsive-framework/wiki/Framework-Development-and-Release-Workflows) to test your Foundation changes. If you'd like to contribute, check out some of our [open issues in Mission Control](https://bu-ist.github.io/responsive-foundation/dashboard.html).

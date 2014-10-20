# Responsive Foundation

A front-end framework for developing responsive sites at Boston University. Used by the [Responsive Theme Framework](https://github.com/bu-ist/responsive-framework/).

## Working with Responsive Foundation

This framework provides a library of Sass and Javascript files that serve as a foundation for building responsive sites. This library is designed to be imported into your project using [Bower](http://bower.io).

It was initially conceived during the build for the WordPress [Responsive Framework](https://github.com/bu-ist/responsive-framework) as a way to share common front-end assets among themes, but does not have an WordPress-specific bindings and can be used for non-WordPress projects as well.

Note that this repository does not include any production-ready assets (e.g. minified, compressed). The build process is entirely up to the project.

You can see this framework in action in the [Responsive Framework](https://github.com/bu-ist/responsive-framework).

### Sass

This library leverages [Sass](http://sass-lang.com/) for a better CSS authoring experience.

The Sass files are structured by function, each containing a partial in the `css-dev/burf` directory:

* Reset (`css-dev/burf/_reset.scss`)
* Responsive Grid (`css-dev/burf/_grid.scss`)
* Fonts (`css-dev/burf/_fonts.scss`)
* Typography (`css-dev/burf/_typography`)

These files rely on a set of reusable mixins and variables, defined separately:

* Mixins (`css-dev/burf/_mixins.scss`)
* Variables (`css-dev/burf/_variables.scss`)

All variables are defined with the [!default](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#variable_defaults_) flag, making it easy for themes to override default values by defining their own prior to `@import`'ing Foundation files.

#### Usage

To use these files make sure that the `responsive-foundation/css-dev` directory is included in your [Sass load path](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#load_paths-option) and add the following to your projects' Sass file to import the base components:

```sass
@import 'burf';
```

You can also load partials individually if you don't need everything:

```sass
@import 'burf/reset';
@import 'burf/grid';
```

#### Themes

The partials listed above make up the base layer of the Foundation. The look and feel of the [Responsive Framework](https://github.com/mgburns/responsive-framework) theme is also defined in this repository in `css-dev/burf-theme.scss`.

Projects that wish to use it as a starting point can add an additional import in their main Sass file:

```sass
@import 'burf';
@import 'burf-theme';
```

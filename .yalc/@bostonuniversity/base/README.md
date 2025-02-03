# BU Base
Standardized set of SCSS utilities and CSS variables for use across plugins and themes.

# Installation
Install the package

```
npm i @bostonuniversity/base
```

# Use

SCSS utilities and variables
In your theme or plugin's SCSS file, include styles like so:

```scss
@use '~@bostonuniversity/base/styles/abstracts/mixins/breakpoints' as bp;
```

# Publishing & Release Process

This package is managed through NPM (https://www.npmjs.com/).  It can be found here: https://www.npmjs.com/package/@bostonuniversity/base

Publishing Process (manual for now, we will automate in the future - please ask a DEV for assistance):
- ensure that this repositor's Main branch is up-to-date
- increment the version number to match changes that were made
- clone the main branch down to your computer
- navigate to the folder on your local computer
- run: 'npm login', and follow the instructions (you will need a valid login account for the BU account)
- once logged in, run: 'npm publish' from the folder on your local computer (please see the note below)

NOTE: you should verify that the package JSON file includes the following to make publishing easier:
```
"publishConfig": {
    "access": "public"
  }
```

# Dev & Testing
Vite has been installed in order to quickly test scss and js compiling for bu-base. The output is in the `dist` folder and not currently used in production or commited to git.

To run compiling open a project terminal and run `npm run vite:watch` and this will start a watcher that updates on every save.

In order to also watch and update yalc, in a separate project terminal run `npm run yalc:watch`.






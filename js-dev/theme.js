/**
 * The main js file for the project.
 *
 * This is the entry point where all modules are imported and compiled together
 * into one resulting `theme.js` or `theme.min.js` file.
 *
 * @package ResponsiveFoundation
 */

// Import dependencies at the top of the file.
import toggle from './modules/toggle';

// Run JS scripts here.
toggle();

// ESLint Note: When there is only a single export from a module, prefer using
// default export over named export. When more modules are added, change default
// to named exports.
// @link https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md#importprefer-default-export
export default { toggle };

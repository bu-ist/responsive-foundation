/**
 * The main js file for the project.
 *
 * This is the entry point where all modules are imported and compiled together
 * into one resulting `theme.js` file.
 *
 * @package ResponsiveFoundation
 */

// Import dependencies at the top of the file.
import { toggle } from './modules/toggle';

// Run JS scripts here.
toggle();

// Export all the components.
export { toggle };

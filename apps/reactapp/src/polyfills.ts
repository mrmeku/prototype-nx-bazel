/*
 * Polyfill stable language features.
 * It's recommended to use @babel/preset-env and browserslist
 * to only include the polyfills necessary for the target browsers.
 */
// TODO: Get compilation to work with core-js. We actually need this line to blow up or else compilation never exits.
import 'core-js/stable';

import 'regenerator-runtime/runtime';

/**
 * This file contains polyfills loaded on all browsers
 **/

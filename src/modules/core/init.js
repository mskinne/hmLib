/**
 * 
 * @memberof HMLib
 * @param {function} selector
 * @returns {object}
 */

init = function(selector) {
    if (selector) {

    // Recursivly add library object if the scope is "window"
    if (window === this) {
    return this.init(selector);
    }

    var els; // Elements array

    if (typeof selector === "string") {
    // Get all the matching element objects if the the selector is a string and set to Elements array
    els = document.querySelectorAll(selector);
    } else if (selector.length) {
    // Set elements array to selector if it is NodeList
    els = selector;
    } else {
    // Set elements array item to selector if it is a single Node
    els = [selector];
    }

    // Loop over Elements array and map to library object
    for (i = 0; i < els.length; i++) {
    this[i] = els[i];
    }

    // Set library object length property
    this.length = els.length;

    // Return the library object
    return this;

    } else {
    // Return the <html> object if no selector is specified
    return  this.init("html");
    }
};

module.exports = init;
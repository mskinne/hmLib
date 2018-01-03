/*
 * HM Javascript Library v.0.0.1
 * https://hokiematt.com
 *
 * A simple DOM manipulation Javascript library with the goal of being lightweight and modular
 *
 * Copyright Matt Skinner
 * matt@hokiematt.com
 *
 */

(function(window) {

  /**
   * Library constructor class
   * @class hmLib
   * @constructor
   * @param {(string|object)} selector a valid CSS selector
   * @returns {object} DOM NodeList of nodes matching selector 
   */
  HMLib = function(selector) {

     /**
      * Abstracts DOM node selection to hm(selector)
      * @param {string} selector - A valid CSS selector.
      * @return {object} hm - An ojbect containing the selected elements.
      */

    if (selector) {

      // Recursivly add library object if the scope is "window"
      if (window === this) {
        return new HMLib(selector);
      }

      var els, 
          i = 0; // Elements array

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
      for ( ; i < els.length; i++) {
        this[i] = els[i];
      }

      // Set library object length property
      this.length = els.length;

      // Return the library object
      return this;

    } else {
    // Return the <html> object if no selector is specified
      return new HMLib("html");
    }

  };

  HMLib.prototype = {

    // @CODE
    // Function definitions go here

  };

  window.hm = HMLib;

}(window));
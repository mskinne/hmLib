/**
 * Adds event handler to selected elements
 * @memberof HMLib
 * @param {string} event valid event handler
 * @param {function} callback callback function to be attached to the event
 * @returns {object} NodeList of elements handler was attached to
 */

var on = function (event, callback) {
  return this.forEach(function (el) {
      el.addEventListener(event, callback, false);
  });
};

module.exports = on;
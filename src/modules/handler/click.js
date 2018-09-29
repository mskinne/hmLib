/**
 * Adds click event to selected elements
 * @memberof HMLib
 * @param {function} callback callback function to be attached to the click event
 * @returns {object} NodeList of elements click handler was attached to
 */

var click = function (callback) {
  return this.on("click", callback);
};

module.exports = click;
/**
 * Adds click event to selected elements
 * @memberof HMLib
 * @param {function} callback callback function to be attached to the click event
 * @returns {object} NodeList of elements click handler was attached to
 */

/*jshint -W025 */
/*jshint -W028 */
click: function (callback) {
/*jshint +W025 */
/*jshint +W028 */
  return this.on("click", callback);
}
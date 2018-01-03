/**
 * Removes event handler to selected elements
 * @memberof HMLib
 * @param {string} event valid event handler
 * @param {function} callback callback function to be called on removal
 * @returns {object} NodeList of elements handler was removed from
 */

/*jshint -W025 */
/*jshint -W028 */
off: function (event, callback) {
/*jshint +W025 */
/*jshint +W028 */
  return this.forEach(function (el) {
      el.removeEventListener(event, callback, false);
  });
}
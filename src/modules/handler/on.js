/**
 * Adds event handler to selected elements
 * @memberof HMLib
 * @param {string} event valid event handler
 * @param {function} callback callback function to be attached to the event
 * @returns {object} NodeList of elements handler was attached to
 */

/*jshint -W025 */
/*jshint -W028 */
on: function (event, callback) {
/*jshint +W025 */
/*jshint +W028 */
  return this.forEach(function (el) {
      el.addEventListener(event, callback, false);
  });
}
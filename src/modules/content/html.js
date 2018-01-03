/**
 * Gets the inner HTML of the selected element or elements
 * @memberof HMLib
 * @returns {(string|string[])} String of inner HTML of selected element.  Returns array of strings if more than one element was selected.
 */

 /**
 * Sets the inner HTML of the selected element or elements
 * @memberof HMLib
 * @param {string} html HTML to be inserted into element
 * @returns {object} DOM NodeList of nodes matching selector after inner HTML is changed
 */

/*jshint -W025 */
/*jshint -W028 */
html: function(html) {
/*jshint +W025 */
/*jshint +W028 */
  if (typeof html !== "undefined") {
    return this.forEach(function (el) {
      el.innerHTML = html;
    });
  } else {
    return this.mapOne(function (el) {
      return el.innerHTML;
    });
  }
}
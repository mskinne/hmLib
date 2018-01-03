/**
 * Gets the inner text of the selected element or elements
 * @memberof HMLib
 * @returns {(string|string[])} String of inner text of selected element.  Returns array of strings if more than one element was selected.
 */

 /**
 * Sets the inner text of the selected element or elements
 * @memberof HMLib
 * @param {string} text Text to be inserted into element
 * @returns {object} DOM NodeList of nodes matching selector after inner text is changed
 */

/*jshint -W025 */
/*jshint -W028 */
text: function(text) {
/*jshint +W025 */
/*jshint +W028 */
  if (typeof text !== "undefined") {
    return this.forEach(function (el) {
      el.innerText = text;
    });
  } else {
    return this.mapOne(function (el) {
      return el.innerText;
    });
  }
}
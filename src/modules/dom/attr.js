/**
 * Gets the requested attribute of the selected element or elements
 * @memberof HMLib
 * @param {string} attr Attribute to be requested
 * @returns {(string|string[])} String of requested attribute of selected element.  Returns array of strings if more than one element was selected.
 */

 /**
 * Sets the requested attribute of the selected element or elements
 * @memberof HMLib
 * @param {string} attr Attribute to be set
 * @param {string} val Value of attribute to be set
 * @returns {object} DOM NodeList of nodes matching selector after attribute is set
 */

/*jshint -W025 */
/*jshint -W028 */
attr: function(attr, val) {
/*jshint +W025 */
/*jshint +W028 */
  if (typeof val !== "undefined") {
    return this.forEach(function (el) {
      el.setAttribute(attr, val);
    });
  } else {
    return this.mapOne(function (el) {
      return el.getAttribute(attr);
    });
  }
}
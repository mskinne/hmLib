/**
 * Check if selected nodes have a particular class
 * @memberof HMLib
 * @param {string} clazz valid CSS class name
 * @returns {boolean} whether the selected elements have a class.  If there are mutiple elements, returns true if any of the elements have the class.
 */

/*jshint -W025 */
/*jshint -W028 */
hasClass: function (clazz) {
/*jshint +W025 */
/*jshint +W028 */
  var className = " " + clazz + " ", 
      i = 0, 
      l = this.length;

  for ( ; i < l; i++) {
    if ((" " + this[i].className + " ").replace(/[\n\t\r]/g, " ").indexOf(className) > -1) {
      return true;
    }
  }

  return false;
}
/**
 * Focuses an element
 * @memberof HMLib
 */

/*jshint -W025 */
/*jshint -W028 */
focus: function (callback) {
/*jshint +W025 */
/*jshint +W028 */
  return this.mapOne(function(el) {
    el.focus();
  });
  
}
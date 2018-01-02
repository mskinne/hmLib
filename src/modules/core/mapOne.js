/**
 * 
 * @memberof HMLib
 * @param {function} callback
 * @returns {object}
 */

/*jshint -W025 */
/*jshint -W028 */
mapOne: function (callback) {
/*jshint +W025 */
/*jshint +W028 */
  var m = this.map(callback);
  return m.length > 1 ? m : m[0];
}
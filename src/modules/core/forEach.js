/**
 * 
 * @memberof HMLib
 * @param {function} callback
 * @returns {object}
 */

/*jshint -W025 */
/*jshint -W028 */
forEach: function (callback) {
/*jshint +W025 */
/*jshint +W028 */
  this.map(callback);
  return this;
}
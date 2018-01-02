/**
 * 
 * @memberof HMLib
 * @param {function} callback
 * @returns {object}
 */

/*jshint -W025 */
/*jshint -W028 */
map: function (callback) {
/*jshint +W025 */
/*jshint +W028 */
  var results = [], 
      i = 0;
  for ( ; i < this.length; i++) {
    results.push(callback.call(this, this[i], i));
  }
  return results;
}
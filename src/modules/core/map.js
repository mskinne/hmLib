/*jshint -W025 */
function (callback) {
/*jshint +W025 */
  var results = [], 
      i = 0;
  for ( ; i < this.length; i++) {
    results.push(callback.call(this, this[i], i));
  }
  return results;
}
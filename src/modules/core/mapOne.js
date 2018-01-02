/*jshint -W025 */
function (callback) {
/*jshint +W025 */
  var m = this.map(callback);
  return m.length > 1 ? m : m[0];
}
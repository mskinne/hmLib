/*jshint -W025 */
function (event, callback) {
/*jshint +W025 */
  return this.forEach(function (el) {
      el.addEventListener(event, callback);
  });
}
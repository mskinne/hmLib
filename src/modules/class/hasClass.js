// Check if Element has a particular class
/*jshint -W025 */
function (clazz) {
/*jshint +W025 */
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
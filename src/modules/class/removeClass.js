/**
 * Remove a class or classes from selected nodes
 * @memberof HMLib
 * @param {(string|string[])} classes valid CSS class names
 * @returns {object} DOM NodeList of nodes matching selector after class(es) are added
 */

/*jshint -W025 */
/*jshint -W028 */
removeClass: function (classes) {
/*jshint +W025 */
/*jshint +W028 */
  var className = this.argToArr(classes);

  return this.forEach( function (el) {
    var cs = el.className.split(" ");

    className.forEach( function (clazz) {
      var j = 0;
      while ( (j = cs.indexOf(clazz)) > -1) {
        cs = cs.slice(0, j).concat(cs.slice(++j));
      }
    });

    el.className = cs.join(" ");
  });
}
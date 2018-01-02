/**
 * Change a class or classes on selected nodes
 * @memberof HMLib
 * @param {(string|string[])} classes valid CSS class names
 * @param {string} [operation=add] change operation ("```add```"" or "```remove```"")
 * @returns {object} DOM NodeList of nodes matching selector after class(es) are added
 */

/*jshint -W025 */
/*jshint -W028 */
changeClass: function (classes, operation) {
/*jshint +W025 */
/*jshint +W028 */
  var className = this.argToArr(classes);
  operation = (typeof operation !== 'undefined') ?  operation : "add";

  return this.forEach( function (el) {
    var cs = el.className.split(" ");

    className.forEach( function (clazz) {
      if (operation == "remove") {
        var j = 0;
        while ( (j = cs.indexOf(clazz)) > -1) {
          cs = cs.slice(0, j).concat(cs.slice(++j));
        }
      } else {
        if (!cs.includes(clazz)) {
          cs.push(clazz);
        }
      }

    });

    el.className = cs.join(" ");
  });
}
/**
 * Add a class or classes to selected nodes
 * @memberof HMLib
 * @param {(string|string[])} classes valid CSS class names
 * @returns {object} DOM NodeList of nodes matching selector after class(es) are added
 */

var addClass = function (classes) {
  var className = this.argToArr(classes);

  return this.forEach( function (el) {
    var cs = el.className.split(" ");

    className.forEach( function (clazz) {
      if (cs.indexOf(clazz) == -1) {
        cs.push(clazz);
      }
    });

    el.className = cs.join(" ");
  });
};

module.exports = addClass;
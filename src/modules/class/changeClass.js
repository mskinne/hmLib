/*jshint -W025 */
function (classes, operation) {
/*jshint +W025 */
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
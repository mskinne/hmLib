/*jshint -W025 */
function (classes) {
/*jshint +W025 */
  var className = this.argToArr(classes);

  return this.forEach( function (el) {
    var cs = el.className.split(" ");

    className.forEach( function (clazz) {
      if (!cs.includes(clazz)) {
        cs.push(clazz);
      } else {
        var j = 0;
        while ( (j = cs.indexOf(clazz)) > -1) {
          cs = cs.slice(0, j).concat(cs.slice(++j));
        }
      }
    });

    el.className = cs.join(" ");
  });

}
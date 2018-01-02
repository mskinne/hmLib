  // Add HTML classes

/*jshint -W025 */
function (classes) {
/*jshint +W025 */
  var className = this.argToArr(classes);

  return this.forEach( function (el) {
    var cs = el.className.split(" ");

    className.forEach( function (clazz) {
      if (!cs.includes(clazz)) {
        cs.push(clazz);
      }
    });

    el.className = cs.join(" ");
  });
}
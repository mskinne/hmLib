/**
 * Focuses an element
 * @memberof HMLib
 */

var focus = function (callback) {
  return this.mapOne(function(el) {
    el.focus();
  });
};

module.exports = focus;
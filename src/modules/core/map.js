/**
 * 
 * @memberof HMLib
 * @param {function} callback
 * @returns {object}
 */

var map = function (callback) {
  var results = [], 
      i = 0;
  for ( ; i < this.length; i++) {
    results.push(callback.call(this, this[i], i));
  }
  return results;
};

module.exports = map;
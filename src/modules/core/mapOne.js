/**
 * 
 * @memberof HMLib
 * @param {function} callback
 * @returns {object}
 */

var mapOne = function (callback) {

  var m = this.map(callback);
  return m.length > 1 ? m : m[0];
};

module.exports = mapOne;
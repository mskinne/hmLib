/**
 * 
 * @memberof HMLib
 * @param {function} callback
 * @returns {object}
 */

var forEach = function (callback) {
  this.map(callback);
  return this;
};

module.exports = forEach;
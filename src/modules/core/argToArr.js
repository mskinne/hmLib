/**
 * Wraps data in array
 * @memberof HMLib
 * @param {*} data any valid data
 * @returns {array} If data is an array, it simply returns the array, otherwise it wraps the data in an array and returns that array.
 */

var argToArr = function (data) {
  if (Array.isArray(data)) {
    return data;
  } else {
    return [data];
  }
};

module.exports = argToArr;
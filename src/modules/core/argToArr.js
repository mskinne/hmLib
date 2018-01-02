/**
 * Wraps data in array
 * @memberof HMLib
 * @param {*} data any valid data
 * @returns {array} If data is an array, it simply returns the array, otherwise it wraps the data in an array and returns that array.
 */


/*jshint -W025 */
/*jshint -W028 */
argToArr: function (data) {
/*jshint +W025 */
/*jshint +W028 */
  if (Array.isArray(data)) {
    return data;
  } else {
    return [data];
  }
}
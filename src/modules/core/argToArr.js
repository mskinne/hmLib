/*jshint -W025 */
function (data) {
/*jshint +W025 */
  if (Array.isArray(data)) {
    return data;
  } else {
    return [data];
  }
}
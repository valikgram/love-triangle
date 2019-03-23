/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var count = 0;
  for (i = 0; i < preferences.length; i++) {
     var k = preferences [i];
     var n = preferences [k - 1];
     if (preferences [n - 1] == i + 1) {
      count ++;
     }
 };
 return Math.floor(count / 3);
};

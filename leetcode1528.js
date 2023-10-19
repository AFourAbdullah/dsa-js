/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  let finalStrArray = new Array(s.length).fill("");
  for (let i = 0; i < s.length; i++) {
    finalStrArray[indices[i]] = s[i];
  }
  return finalStrArray.join("");
};

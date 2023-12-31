/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return ""; // If the input array is empty, there's no common prefix.
  }
  let prefixAns = "";
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== strs[0][i]) {
        return prefixAns;
      }
    }
    prefixAns += strs[0][i];
  }
  return prefixAns;
};

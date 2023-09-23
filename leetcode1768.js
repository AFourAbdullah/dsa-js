/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let resultStr = "";
  let strLengthIterate =
    word1.length == word2.length
      ? word1.length
      : word1.length > word2.length
      ? word1.length
      : word2.length;
  for (let i = 0; i < strLengthIterate; i++) {
    resultStr += word1[i] ? word1[i] : "";
    resultStr += word2[i] ? word2[i] : "";
  }
  return resultStr;
};

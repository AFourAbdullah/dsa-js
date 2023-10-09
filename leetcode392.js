/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (s.length > t.length) return false;
  let fp = 0;
  for (let i = 0; i < t.length; i++) {
    if (s[fp] == t[i]) {
      fp++;
    }
  }
  return fp == s.length;
};

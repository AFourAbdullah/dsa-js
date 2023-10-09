var isPalindrome = function (s) {
  let nonAlphaNumericStr = s.replace(/[^a-z0-9]/gi, "");
  console.log(nonAlphaNumericStr);
  console.log(typeof nonAlphaNumericStr);
  let reverseStr = nonAlphaNumericStr.split("").reverse().join("");
  console.log(reverseStr);
  return reverseStr.toLowerCase() == nonAlphaNumericStr.toLowerCase();
};

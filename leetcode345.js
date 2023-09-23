/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
  let finalStr = s;
  console.log(finalStr, "ginal");
  let vowelsInGivenStr = [];
  let indexOfVowelsInGivenStr = [];
  for (let i in s) {
    if (vowels.includes(s[i])) {
      vowelsInGivenStr.push(s[i]);
      //   vowelsInGivenStr.push(i)
      indexOfVowelsInGivenStr.push(i);
    }
  }
  let newStr = vowelsInGivenStr.reverse();
  console.log(newStr);
  let vowelsInGivenStrFinal = [];
  console.log(indexOfVowelsInGivenStr);
  for (let i = 0; i < indexOfVowelsInGivenStr.length; i++) {
    vowelsInGivenStrFinal.push(newStr[i]);
    vowelsInGivenStrFinal.push(indexOfVowelsInGivenStr[i]);
  }
  let finalstrArr = finalStr.split("");
  console.log("varrtrFinal", finalstrArr);
  console.log("vowelsInGivenStrFinal", vowelsInGivenStrFinal);
  for (let i = 0; i < vowelsInGivenStrFinal.length; i = i + 2) {
    finalstrArr[vowelsInGivenStrFinal[i + 1]] = vowelsInGivenStrFinal[i];
    console.log(vowelsInGivenStrFinal[i + 1]);
  }
  console.log("varrtrFinal", finalstrArr.join(""));
  finalStr = finalstrArr.join("");
  return finalStr;
};

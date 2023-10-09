var lengthOfLastWord = function (s) {
  let str = s.trim();
  console.log(str[str.length - 1]);
  let sArray = str.split(" ");

  return sArray[sArray.length - 1].length;
};

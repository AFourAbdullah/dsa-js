var reverse = function (x) {
  let numInstring = x.toString().split("").reverse();

  for (let i = 0; i < numInstring.length; i++) {
    if (numInstring[i] == "-") {
      let temp = numInstring.pop();
      numInstring.unshift(temp);
    }
  }
  if (numInstring[0] == "0") {
    numInstring.shift();
  }
  let finalstr = numInstring.join("");
  let reversedNumber = Number(finalstr);

  if (
    reversedNumber < Math.pow(-2, 31) ||
    reversedNumber > Math.pow(2, 31) - 1
  ) {
    return 0;
  }

  return reversedNumber;
};

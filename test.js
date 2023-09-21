var isValid = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char == "(" || char == "{" || char == "[") {
      stack.push(i);
      console.log("ss", stack);
    } else if (char == ")" || char == "}" || char == "]") {
      if (stack.length == 0) {
        return false;
      }

      const top = stack.pop();
      if (
        (top == "(" && char !== ")") ||
        (top == "{" && char !== "}") ||
        (top == "[" && char !== "]")
      ) {
        return false;
      }
    }
  }
  return stack.length == 0;
};

console.log(isValid("{()}"), "jef");
let ss = "hehehe";

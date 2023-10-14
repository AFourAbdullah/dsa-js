/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  // for(let i=0;i<num)
  let start = 0;
  let end = numbers.length - 1;
  let answerr = [];
  // our approach if sum of start+end is greater than targert we decrement end by 1 else we increment start by one if target is greater than sum of start+end ,we are taking this approach b/c array is sorted so if start+end is greater than target it means we have to decrease end by 1 and so on..
  while (start < end) {
    if (numbers[start] + numbers[end] == target) {
      answerr.push(start + 1, end + 1);
      break;
    } else if (numbers[start] + numbers[end] > target) {
      end--;
    } else {
      start++;
    }
  }
  return answerr;
};

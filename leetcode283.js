var moveZeroes = function (nums) {
  let firstPointer = 0;
  for (let num of nums) {
    if (num !== 0) {
      nums[firstPointer] = num;
      firstPointer++;
    }
  }
  for (let j = firstPointer; j < nums.length; j++) {
    nums[j] = 0;
  }
  return nums;
};

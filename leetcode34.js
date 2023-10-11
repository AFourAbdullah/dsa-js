/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  if (nums.length == 0) {
    return [-1, -1];
  }
  let finalArr = [];
  let searchFirst = true;
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] == target) {
      finalArr[0] = mid;
      high = mid - 1;
    } else if (nums[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  low = 0;
  high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] == target) {
      finalArr[1] = mid;
      low = mid + 1;
    } else if (nums[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return finalArr.length == 0 ? [-1, -1] : finalArr;
};

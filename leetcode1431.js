/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let final = candies;
  let sortedArr = sortArr(candies);
  let result = [];

  console.log(sortedArr);
  console.log("orginal is", final);
  let greatestNumOfCandies = sortedArr[sortedArr.length - 1];
  console.log(greatestNumOfCandies);
  let arrayOfKidsWithExtraCandies = final.map((c) => c + extraCandies);
  console.log("arrry is", arrayOfKidsWithExtraCandies);
  for (let i of arrayOfKidsWithExtraCandies) {
    result.push(i >= greatestNumOfCandies);
  }
  return result;
};
function sortArr(candies) {
  let sortedArr = [...candies].sort((a, b) => a - b); // Create a copy and sort it
  return sortedArr;
}

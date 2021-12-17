/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // let num1, num2;
  // nums.some((v, i) => {
  //   num1 = i;
  //   return nums.some((vv, ii) => {
  //     if (i === ii) return false;
  //     num2 = ii;
  //     if (v + vv === target) return true;
  //   });
  // });
  // return [num1, num2];
  for (var i = 0; i < nums.length; i++) {
    for (var j = 0; j < nums.length; j++) {
        if ( nums[i] + nums[j] == target && i != j ) return [i,j];
    }
  }
};
// @lc code=end


/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const nums = nums1.concat(nums2).sort((a, b) => a - b);
  const midianIndex = nums.length / 2;
  if (nums.length % 2 === 1) {
    return nums[midianIndex | 0];
  }
  return (nums[midianIndex] + nums[midianIndex - 1]) / 2;
};
// @lc code=end


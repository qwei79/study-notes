/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let arr = x.toString().split('');
  let len = arr.length - 1;
  return arr.every((v, i) => {
    if (i > len / 2 | 0) return true;
    return v === arr[len - i];
  });
};
// @lc code=end


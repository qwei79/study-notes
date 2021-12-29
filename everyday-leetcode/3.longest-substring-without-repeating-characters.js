/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length <= 1) return s.length;
  const arr = s.split('');
  let length = 1;
  let targetArr = [arr.shift()];
  for (let i = arr.length; i > 0; i--) {
    const current = arr.shift();
    const index = targetArr.findIndex(v => v === current);
    if (index >= 0) {
      length = length < targetArr.length ? targetArr.length : length;
      targetArr = targetArr.slice(index + 1);
    }
    targetArr.push(current);
  }
  length = length < targetArr.length ? targetArr.length : length;
  return length;
};
// @lc code=end


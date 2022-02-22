/*
 * @lc app=leetcode id=10 lang=javascript
 *
 * [10] Regular Expression Matching
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  const reg = new RegExp(p);
  const result = reg.exec(s);
  return result ? result[0] === s : false
};
// @lc code=end


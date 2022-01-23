/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const s = x.toString().split('');
  let pre;
  if (x < 0) pre = s.shift();
  s.reverse().unshift(pre);
  const n = Number(s.join(''));
  if (n > Math.pow(2,31) - 1 || n < 0 - Math.pow(2,31)) return 0;
  return n;
};
// @lc code=end


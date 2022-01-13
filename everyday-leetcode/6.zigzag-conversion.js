/*
 * @lc app=leetcode id=6 lang=javascript
 *
 * [6] Zigzag Conversion
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    const arrs = Array(numRows).fill();
    s.split('').forEach((v, i) => {
      let len = (numRows * 2) - 2;
      let ind = i % len || 0;
      if (ind > numRows - 1) ind = len - ind;
      if (!arrs[ind]) arrs[ind] = [v];
      else arrs[ind].push(v);
    });
    return arrs.flat().join('');
};
// @lc code=end


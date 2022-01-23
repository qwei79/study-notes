/*
 * @lc app=leetcode id=8 lang=javascript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
  // let n = Number(s);
  // if (n < 0 - Math.pow(2, 31)) return 0 - Math.pow(2, 31);
  // if (n > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;
  let n = 0;
  let flag, type;
  const arr = s.trim().split('');
  const first = arr[0];
  if (first === '+' || first === '-') {
    type = first;
    arr.shift();
  }
  const numS = arr.reduce((acc, cur) => {
    if (flag) return acc;
    if (!cur.trim() || isNaN(Number(cur))) {
      flag = true;
      return acc;
    }
    return acc + cur;
  }, '');
  if (!numS) n = 0;
  else if (type && type === '-') n = Number(type + numS);
  else n = Number(numS);
  
  if (n < 0 - Math.pow(2, 31)) return 0 - Math.pow(2, 31);
  if (n > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;
  return n;
};
// @lc code=end


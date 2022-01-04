/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length <= 1) return s;
  function check(a) {
    let l = 0;
    let r = a.length - 1;
    while (l < r) {
      if (a[l] === a[r]) {
        l++;
        r--;
      } else {
        return false;
      }
    }
    return a;
  }
  function getMaxS(s, l, r) {
    while (l < r) {
      if (check(s.substring(l, r + 1))) return s.substring(l, r + 1);
      r--;
    }
    return '';
  }

  let maxS = s.substring(0,1);
  
  let l = 0;
  let r = s.length - 1;
  while (l != s.length - 1 && (r - l + 1) > maxS.length) {
    let string = getMaxS(s, l, r);
    if (string.length > maxS.length) maxS = string;
    l++;
  }

  return maxS;
};
// @lc code=end


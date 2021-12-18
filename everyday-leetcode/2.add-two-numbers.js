/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const carry = arguments[2];
  if (l1 || l2) {
    const v1 = l1 ? l1.val : 0;
    const v2 = l2 ? l2.val : 0;
    const n1 = l1 ? l1.next : null;
    const n2 = l2 ? l2.next : null;
    const v = carry ? v1 + v2 + 1 : v1 + v2;
    return new ListNode(v % 10, addTwoNumbers(n1, n2, v >= 10));
  } else if (carry) {
    return new ListNode(1, null)
  }
};
// @lc code=end


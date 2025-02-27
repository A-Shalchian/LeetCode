/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let ahead = dummy;
  let behind = dummy;

  for (let i = 0; i < n + 1; i++) {
    ahead = ahead.next;
  }

  while (ahead) {
    ahead = ahead.next;
    behind = behind.next;
  }
  behind.next = behind.next.next;
  return dummy.next;
};
// Time Complexity: O(n)
// Space Complexity: O(1)

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */


var sortedListToBST = function(head) {
    if(!head) {
        return null;
    }
    let fast = head,
        mid = head;
    
    while(fast && fast.next) {
        mid = mid.next;
        fast = fast.next.next;
    }
    if(mid === head) {
        return new TreeNode(head.val, null, null);
    }
    let curr = head;
    while(curr.next !== mid) {
        curr = curr.next;
    }
    curr.next = null;

    const node = new TreeNode(mid.val);
    node.left = sortedListToBST(head);
    node.right = sortedListToBST(mid.next);
    return node;
};

console.log(sortedListToBST([-10,-3,0,5,9]));
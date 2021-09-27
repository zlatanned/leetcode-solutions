"""
    Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.
        Example 1:
            Input: head = [1,2,6,3,4,5,6], val = 6
            Output: [1,2,3,4,5]
"""

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeElements(self, head: Optional[ListNode], val: int) -> Optional[ListNode]:
        if not head:
            return None
        if head.val == val:
            head = self.removeElements(head.next,val)
        else:
            head.next = self.removeElements(head.next,val)
        return head

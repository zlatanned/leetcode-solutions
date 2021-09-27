# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head):
        node = None
        while head:
            tmp = head.next
            head.next = node
            node = head
            head = tmp
        return node

"""
    Given two integer arrays nums1 and nums2, return an array of their intersection.
    Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

        Example 1:

            Input: nums1 = [1,2,2,1], nums2 = [2,2]
            Output: [2,2]

        Example 2:

            Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
            Output: [4,9]
            Explanation: [9,4] is also accepted.
"""

class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        sorted_nums1, sorted_nums2, res = sorted(nums1), sorted(nums2), []
        pointer1 = pointer2 = 0
        while pointer1 < len(sorted_nums1) and pointer2 < len(sorted_nums2):
            if sorted_nums1[pointer1] < sorted_nums2[pointer2]:
                pointer1 += 1
            elif sorted_nums2[pointer2] < sorted_nums1[pointer1]:
                pointer2 += 1
            else:
                res.append(sorted_nums1[pointer1])
                pointer1 += 1
                pointer2 += 1
        return res

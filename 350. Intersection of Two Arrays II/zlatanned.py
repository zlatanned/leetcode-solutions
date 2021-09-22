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

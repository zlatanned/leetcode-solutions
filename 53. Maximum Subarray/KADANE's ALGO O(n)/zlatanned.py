class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        curSum = maxSum = nums[0]
        for num in nums[1:len(nums)]:
            curSum = max(num, curSum + num)
            maxSum = max(maxSum, curSum)

        return maxSum

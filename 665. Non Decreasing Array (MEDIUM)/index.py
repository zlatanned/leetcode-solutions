class Solution:
    def checkPossibility(self, nums: List[int]) -> bool:
        c=0 #counter
        for i in range(len(nums)-1):
            if nums[i]>nums[i+1]:
                c+=1
                if i>0:
                    if nums[i-1]<=nums[i+1]:
                        nums[i]=nums[i-1] #useful like when [2,2,3,2,4]
                    else:
                        nums[i+1]=nums[i] #useful like when [2,3,3,2,4]
            if c>1:
                return False
        return True

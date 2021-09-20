def containsDuplicates(nums):
    return len(set(nums)) != len(nums)
    
    
print(containsDuplicates([1,2,3,1]))

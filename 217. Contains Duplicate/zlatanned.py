def containsDuplicates(nums):
    return len(set(nums)) != len(nums)
    
    
print(containsDuplicates([1,2,3,1])) #True

"""
    Time Complexity: 
        1. set(nums)  => O(n)
        2. len comparison => O(n)
        
            Net: O(n)
"""

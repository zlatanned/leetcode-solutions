def containsDuplicates(nums):
    return len(set(nums)) != len(nums)
    
    
print(containsDuplicates([1,2,3,1])) #True

"""
    Time Complexity: 
        1. set(nums)  => O(n)
        2. len comparison => O(n)
        
            Net Time Complexity: O(n)
            
    Space Complexity: 
        1. used set for array of n length => O(n)
        
            Net Space Complexity: O(n)
"""

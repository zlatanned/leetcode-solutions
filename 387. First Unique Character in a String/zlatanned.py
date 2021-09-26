"""
  Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

      Example 1:

      Input: s = "leetcode"
      Output: 0
      Example 2:

      Input: s = "loveleetcode"
      Output: 2
      Example 3:

      Input: s = "aabb"
      Output: -1
"""
from collections import OrderedDict, Counter
class Solution:
    def firstUniqChar(self, s: str) -> int:
	# Explaination: Ordered Dict will save the characters it encounters in
	# same sequence as the original string. Hence it becomes easy to catch hold of the first
	#unique character. Then according to the counter variable, whenever the first 1 is encountered
	# the corresponding dict.key's index is returned from the original String.
        for i,j in OrderedDict(Counter(s)).items():
            if j == 1:
                return s.index(i)
        return -1

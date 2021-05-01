"""
Problem: Design a special dictionary which has some words and allows you to search the words in it by a prefix and a suffix.
Implement the WordFilter class:

WordFilter(string[] words) Initializes the object with the words in the dictionary.
f(string prefix, string suffix) Returns the index of the word in the dictionary which has the prefix prefix and the suffix suffix.
If there is more than one valid index, return the largest of them.
If there is no such word in the dictionary, return -1.

Example 1:

Input:
["WordFilter", "f"]
[[["apple"]], ["a", "e"]]
Output:
[null, 0]

Explanation:
WordFilter wordFilter = new WordFilter(["apple"]);
wordFilter.f("a", "e"); // return 0, because the word at index 0 has prefix = "a" and suffix = 'e".

Solution:
Let n be number of words, L be maximum length of word.
For word 'apple', we find substring suffix + # + prefix in string apple#apple. 
Now, quick way to find substring is for example create Trie with all suffixes of apple#apple, which include #.

Complexity:
It is O(nL^2) time and space for init: for each word we need O(L^2) processing time. 
For f we need O(L) time and O(1) space, because we just traverse through tree.
So, final complexity is O(nL^2 + QL), where Q is number of queries.
"""

class TrieNode:
    def __init__(self):
        self.children = {}
        self.index = 0

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word, index): #None
        root = self.root
        root.index = index
        for symbol in word:
            root = root.children.setdefault(symbol, TrieNode())
            root.index = index

    def startsWith(self, word):
        root = self.root
        for symbol in word:
            if symbol not in root.children:
                return -1
            root = root.children[symbol]
        return root.index  

class WordFilter:
    def __init__(self, words):
        self.trie = Trie()
        self.words = {}

        for index, word in enumerate(words):
            long = word + "#" + word
            for i in range(len(word)):
                self.trie.insert(long[i:], index)

    def f(self, prefix, suffix):
        return self.trie.startsWith(suffix + "#" + prefix)


# Your WordFilter object will be instantiated and called as such:
# obj = WordFilter(['apple'])
# param_1 = obj.f('a','r')
# print(param_1)
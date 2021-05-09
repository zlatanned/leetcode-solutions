class Solution:
    def isPossible(self, target):
        heap = []
        for num in target: heappush(heap, -num)
        s = sum(target)
        while True:
            elem = -heappop(heap)
            if elem == 1: return True
            if s == elem: return False
            cand = (elem - 1) % (s - elem) + 1
            if cand == elem: return False
            s = s - elem + cand
            heappush(heap, -cand)

            
""" Pseudo code: 
    1. Put all negative elements to heap and evaluate sum s of all elements.
    2. Start to do steps: extract the biggest elements elem. If it is equal to 1, we are good: it means, that all smaller elements also equal to 1 and we can return True. If it happen that s == elem, it means that we actually have only one element in target, and it is not equal to 1: we can not do anything with it, so we return False.
    3. Next, we need to put new element in our heap. And here we have another subtle point: imagine, that we have [100, 3]. Then on the next step we have [97, 3], then [94, 3] and so on. In the given example we need only 33 steps to converge, however if we have [10000000, 1] we will get TLE for sure. Note, that what we did is similar to one step of Eucledian algorithm, there is classical improvement, where instead of (m, n) -> (m-n, n) step we do (m, n) -> (m%n, n) step. Note also, that in the case [99, 3] we want to stop on [3, 3], not going to [0, 3], so we need to modify step a bit: I did it using cand = (elem - 1) % (s - elem) + 1. Here s - elem is sum of all elements except elem.
    4. Check if cand == elem and if it is the case, it means, that we can not do the step, so we are stuch and we return False.
    5. Finally, we update s: subtract elem and add new element cand and push -cand to our heap.
"""

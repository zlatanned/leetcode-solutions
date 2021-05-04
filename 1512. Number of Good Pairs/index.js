/**
 * @param {number[]} nums
 * @return {number}
 */
function numIdenticalPairs(nums) { // O(n)
  const map = nums.reduce((m, n, i) => m.set(n, (m.get(n)||0) + 1), new Map());
  return [...map.values()].reduce((num, n) => num + n * (n - 1) / 2, 0);
};

/*
First line, count how many times each number appears.
2nd line, uses the n(n-1)/2 to get how many combinations are possible.

This is the intuition for the formula, if you have only one number is zero, if you have a pair is two and so on.

1: 0
2: 1
3: 2 + 1 = 3
4: 3 + 2 + 1 = 6
5: 4 + 3 + 2 + 1 = 10

So of the formula to getting all natural number added up is: n(n-1)/2.
*/

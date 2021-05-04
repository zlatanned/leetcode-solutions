/**
 * @param {number[]} nums
 * @return {number}
 */
function numIdenticalPairs(nums) { // O(n)
  const map = nums.reduce((m, n, i) => m.set(n, (m.get(n)||0) + 1), new Map());
  return [...map.values()].reduce((num, n) => num + n * (n - 1) / 2, 0);
};

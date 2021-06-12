/**
 * @param {number[]} nums
 * @return {number[]}
 */
function smallerNumbersThanCurrent(nums) {
  const sorted = Array.from(nums).sort((n1, n2) => n2 - n1);
  const map = new Map(sorted.map((num, index) => [num, nums.length - index - 1]));
  return nums.map(num => map.get(num));
}

/*
    Complexity:
        Time O(NlogN)
        Space O(N)

    Example:
    nums [8,1,2,2,3]

    Sort nums by descending order: sorted [8,3,2,2,1]
    Create map with counts: map: {8:4,3:3,2:1,1:0}
    Return an array with counts stored in map: result: [4,0,1,1,3]
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    const nums1 = new Set([...nums]);
    const sorted = Array.from(nums1).sort((a,b) => b-a);
    return sorted.length < 3 ? sorted[0] : sorted[2];
};

// Time: O(nlogn)

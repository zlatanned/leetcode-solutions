/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    nums1 = [...nums1, ...nums2];
    nums1.sort((a, b) => a - b);

    let num = (nums1.length % 2 != 0) ? (nums1[Math.floor((nums1.length) / 2)]) : ((nums1[Math.floor((nums1.length - 1) / 2)] + nums1[(nums1.length) / 2]) / 2);
    return num;
};

// console.log(findMedianSortedArrays([1, 3], [2]));
// console.log(findMedianSortedArrays([1,3,6], [2,9,10]));
// console.log(findMedianSortedArrays([0,0], [0,0]));
// console.log(findMedianSortedArrays([1], []));
// console.log(findMedianSortedArrays([], [2]));
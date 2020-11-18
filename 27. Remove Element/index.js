/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function(nums, val) {
    if(nums.length === 0 || nums.indexOf(val) < 0) return nums.length;

    let count = 0;
    for(let i = 0, max = nums.length; i<max ; i++){
        if(nums[i] !== val) nums[count++] = nums[i];
    }
    return count;
};

//console.log(removeElement([1,2,3,4,2,0,8,2,5,2], 2));
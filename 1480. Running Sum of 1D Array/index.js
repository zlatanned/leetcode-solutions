var runningSum = function(nums) {
    let len = nums.length;
    for(let i = 1; i < len; i++){
        nums[i] += nums[i-1]; 
    }
    return nums;
};

//console.log(runningSum([1,2,3,4])) => Output: [1,3,6,10,15]

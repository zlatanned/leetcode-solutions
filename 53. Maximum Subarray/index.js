let maxSubArray = (nums = []) => {
    let currentSum = -Infinity;
    let maxSum = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        currentSum = Math.max(0, currentSum);
        currentSum += nums[i];
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}
//console.log(maxSubArray([2,1,-1,4]));                     Output = 6
//console.log(maxSubArray([2,1,-3,4]));                     Output = 4
//console.log(maxSubArray([-2,-2,-3,4,-7,-4,-11,-5,-4]));   Output = -2
//console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));        Output = 6
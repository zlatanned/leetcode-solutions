let minCostClimbingStairs = ((cost) => {
    for (let i = 2; i <= cost.length - 1; i++) {
        cost[i] = cost[i] + Math.min(cost[i - 1], cost[i - 2]);
    }
    return Math.min(cost[cost.length - 1], cost[cost.length - 2]);
});

/*
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])); //6
console.log(minCostClimbingStairs([10, 15, 20])); //15
console.log(minCostClimbingStairs([0, 0, 2, 1])); //1
*/
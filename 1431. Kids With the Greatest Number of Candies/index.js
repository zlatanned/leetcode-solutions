/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max = Math.max(...candies);
    for(let i = 0; i < candies.length; i++){
        candies[i] = (candies[i] <= max && (candies[i] + extraCandies) >= max) ? true : false;
    }
    return candies;
};

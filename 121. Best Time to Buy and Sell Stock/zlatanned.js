/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
    let maxProfit = 0;
    let min  = prices[0];
    prices.forEach((price) => {
        min = Math.min(price, min);
        maxProfit = Math.max(maxProfit, price - min);
    });
    return maxProfit;
};

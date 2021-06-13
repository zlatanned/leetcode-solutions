/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(num) {
    const ans = [0];
    let base = 1;
    for (let i = 1; i < num + 1; i++) {
        if (i === base) {
            ans.push(1);
            base *= 2;
        } else {
            ans[i] = ans[i - base / 2] + 1;
        }
    }
    return ans;
};

/*
    Complexity:
        Time = O(n)
        
    Example: 
        Input: n = 2
        Output: [0,1,1]
        Explanation:
        0 --> 0
        1 --> 1
        2 --> 10
*/

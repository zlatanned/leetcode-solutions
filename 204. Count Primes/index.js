/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let hash = new Array(n).fill(true);
    hash[0] = false;
    hash[1] = false;
    for (let i=2;i*i<n;i++) {
        if (hash[i]) {
            for(let j=i*i;j<n;j+=i){ // p*(p+1)...
                hash[j] = false;
            }
        }
    }
    return hash.filter((val)=>val).length;
};

//Algo:
//Use Sieve of Eratosthenes Algorithm
//Mark all increment of current value to false. p*(p+1), p*(p+2) ...
//The total Iteration run time can reduce to sqrt(n)

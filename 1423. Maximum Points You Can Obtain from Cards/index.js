/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
  let max = 0
  // calculate the initial sum
  let i = 0
  while (i < k){
        max += cardPoints[i]
      i++
  }
  
  // shift it backwards 1 position for k times and update the max
  let offset = 1
  let sum = max
  while(offset <= k){
    sum = sum - cardPoints[k - offset] + cardPoints[cardPoints.length - offset]
    max = Math.max(max, sum)
    offset++
  }
  
  return max
  
};

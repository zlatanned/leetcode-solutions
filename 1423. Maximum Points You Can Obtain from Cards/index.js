/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
  let max = 0;
  // calculate the initial sum
  let i = 0;
  while (i < k){
        max += cardPoints[i];
      i++;
  }
  
  // shift it backwards 1 position for k times and update the max
  let offset = 1;
  let sum = max;
  while(offset <= k){
    sum = sum - cardPoints[k - offset] + cardPoints[cardPoints.length - offset];
    max = Math.max(max, sum);
    offset++;
  }
  return max;
};

//There are several cards arranged in a row, and each card has an associated number of points The points are given in the integer array cardPoints.
//In one step, you can take one card from the beginning or from the end of the row. You have to take exactly k cards.
//Your score is the sum of the points of the cards you have taken.
//Given the integer array cardPoints and the integer k, return the maximum score you can obtain.

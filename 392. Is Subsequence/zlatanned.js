//Greedy, two pointer solution

var isSubsequence = function(s, t) {
    let i = 0, j = 0;
    while( j < t.length && i < s.length) {
        if(s[i] === t[j]) {
            i++;
        }
        j++;        
    }
    return i === s.length;
};

/*
    Time Complexity: O(n) where n is length of child string
*/

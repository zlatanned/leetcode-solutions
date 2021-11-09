/*
    There are n cities. Some of them are connected, while some are not.
    If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.

    A province is a group of directly or indirectly connected cities and no other cities outside of the group.

    You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

    Return the total number of provinces.
    
    Example 1:


    Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
    Output: 2
    Example 2:


    Input: isConnected = [[1,0,0],[0,1,0],[0,0,1]]
    Output: 3
*/


/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let visited = new Set();
    let provs = 0;
    for(let i = 0; i < isConnected.length; i++) {
        if(!(visited.has(i))) {
           provs++;
           DFS(isConnected, i, visited);
        }
    }
    return provs;
};

const DFS = (isConnected, i, visited) => {
    visited.add(i);
    for(let j = 1; j < isConnected.length; j++) {
        if(isConnected[i][j] && !(visited.has(j))) {
            DFS(isConnected, j, visited);
        }
    }
}

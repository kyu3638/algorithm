/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const dp = [[], [1]];

    for(let i = 2; i <= numRows; i++) {
        const temp = [];

        for(let j = 0; j < dp[i-1].length; j++) {
            if(j+1<dp[i-1].length){
                temp.push(dp[i-1][j]+dp[i-1][j+1]);
            }
        }

        dp.push([1, ...temp, 1]);
    }

    return dp.slice(1);
};
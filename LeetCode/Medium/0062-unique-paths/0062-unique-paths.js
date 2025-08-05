/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const dp = Array.from({length:m}, () => Array.from({length:n}, () => Infinity));

    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(i === 0 && j === 0) {
                dp[i][j] = 1;
                continue;
            }
            const fromTop = i - 1 >= 0 ? dp[i - 1][j] : 0;
            const fromLeft = j - 1 >= 0 ? dp[i][j - 1] : 0;
            dp[i][j] = fromTop + fromLeft;
        }
    }

    return dp[m - 1][n - 1];
};
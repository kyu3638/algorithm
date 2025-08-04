/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const dp = [0, 1, 2, 3, 5];

    if(n < 5) return dp[n];

    for(let i = 5; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }

    return dp[n];
};


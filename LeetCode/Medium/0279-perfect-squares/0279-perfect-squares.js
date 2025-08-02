/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    const dp = Array.from({length:n+1}, () => Infinity);
    dp[0] = 0;

    for(let i = 1; i <= n; i++) {
        for(let j = 1; j * j <= i; j++) {
            dp[i] = Math.min(dp[i], dp[i - j*j] + 1);
        }
    }

    return dp[n];
};
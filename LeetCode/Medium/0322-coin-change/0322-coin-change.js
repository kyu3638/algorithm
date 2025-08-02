/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if(amount === 0) return 0;

    const dp = Array.from({length:amount + 1}, () => Infinity);
    dp[0] = 0;

    for(let i = 1; i <= amount; i++) {
        for(let coin of coins) {
            if(coin <= i) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
};
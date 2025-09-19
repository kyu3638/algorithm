/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    const dp = Array.from({ length: nums.length }, () => 0);
    dp[0] = 1;

    for (let i = 1; i < nums.length; i++) {
        dp[i] = 1;
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j]+1);
            }
        }
    }

    return Math.max(...dp);
};
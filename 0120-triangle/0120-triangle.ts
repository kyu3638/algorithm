function minimumTotal(triangle: number[][]): number {
    const height = triangle.length;

    const dp = Array.from({ length: height }, (_, i) => Array.from({ length: i + 1 }, () => 0));
    dp[0][0] = triangle[0][0];

    for (let i = 1; i < triangle.length; i++) {
        for (let j = 0; j < triangle[i].length; j++) {
            const current = triangle[i][j];
            if (j === 0) {
                dp[i][j] = current + dp[i - 1][j];
            } else if (j === triangle[i].length - 1) {
                dp[i][j] = current + dp[i - 1][j - 1];
            }
            else {
                dp[i][j] = current + Math.min(dp[i - 1][j - 1], dp[i - 1][j]);
            }
        }
    }

    return Math.min(...dp[dp.length - 1]);
};
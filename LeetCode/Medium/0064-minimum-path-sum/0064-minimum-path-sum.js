/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const dp = Array.from({length:rows},() => Array.from({length:cols}, () => Infinity));
    dp[0][0] = grid[0][0];

    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            if(i === 0 && j === 0) continue;

            const fromTop = i > 0 ? dp[i-1][j] : Infinity;
            const fromLeft = j > 0 ? dp[i][j-1] : Infinity;
        
            dp[i][j] = Math.min(fromTop, fromLeft) + grid[i][j];
        }
    }
    
    return dp[rows - 1][cols - 1];
};
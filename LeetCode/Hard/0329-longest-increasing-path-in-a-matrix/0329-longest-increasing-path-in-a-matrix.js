/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const longestPath = Array.from({length:rows}, () => Array.from({length:cols}, () => 0));

    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

    const dfs = (x,y) => {
        if(longestPath[x][y] !== 0) return longestPath[x][y];

        longestPath[x][y] = 1;

        for(let i = 0; i < 4; i++) {
            const nextRow = x + dx[i];
            const nextCol = y + dy[i];
            if(nextRow >= 0 && nextRow < rows && nextCol >= 0 && nextCol < cols) {
                if(matrix[x][y] < matrix[nextRow][nextCol]) {
                    longestPath[x][y] = Math.max(longestPath[x][y], 1 + dfs(nextRow, nextCol));
                }
            }
        }

        return longestPath[x][y];  
    }

    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            dfs(i, j);
        }
    }

    let maxPath = 0;

    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            maxPath = Math.max(maxPath, longestPath[i][j]);
        }
    }

    return maxPath;
};
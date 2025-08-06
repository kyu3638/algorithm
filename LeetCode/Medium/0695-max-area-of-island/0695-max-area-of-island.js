/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    const visited = Array.from({ length: rows }, () => Array.from({ length: cols }, () => false));
    let maxCount = 0;

    const bfs = (row, col) => {
        const queue = [[row, col]];
        visited[row][col] = true;
        
        let front = 0;

        let count = 0;

        const dr = [-1, 1, 0, 0];
        const dc = [0, 0, -1, 1];

        while (front < queue.length) {
            const [currentRow, currentCol] = queue[front++];
            count++;

            for (let i = 0; i < 4; i++) {
                const nextRow = currentRow + dr[i];
                const nextCol = currentCol + dc[i];
                if (nextRow >= 0 && nextRow < rows && nextCol >= 0 && nextCol < cols) {
                    if (grid[nextRow][nextCol] === 1 && visited[nextRow][nextCol] === false) {
                        queue.push([nextRow, nextCol]);
                        visited[nextRow][nextCol] = true;
                    }
                }
            }
        }

        return count;
    };

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1 && visited[i][j] === false) {
                const count = bfs(i, j);
                maxCount = Math.max(maxCount, count);
            }
        }
    }

    return maxCount;
};
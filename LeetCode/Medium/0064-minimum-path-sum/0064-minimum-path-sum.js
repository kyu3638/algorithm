/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const map = Array.from({length:rows},() => Array.from({length:cols}, () => Infinity));
    map[0][0] = grid[0][0];

    // 아래 또는 우측으로만 이동
    const dx = [1, 0]; 
    const dy = [0, 1];

    const queue = [[0, 0, grid[0][0]]];

    while(queue.length > 0) {
        const [currentX, currentY] = queue.shift();
        
        for(let i = 0; i < 2; i++) {
            const nextRow = currentX + dx[i];
            const nextCol = currentY + dy[i];
            if(nextRow >=0 && nextRow < rows && nextCol >= 0 && nextCol < cols) {
if(map[nextRow][nextCol] > map[currentX][currentY] + grid[nextRow][nextCol]) {
    map[nextRow][nextCol] = map[currentX][currentY] + grid[nextRow][nextCol];
    queue.push([nextRow, nextCol]);
}
            }
        }
    }

    return map[rows-1][cols-1];
};
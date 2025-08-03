/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    const rows = mat.length;
    const cols = mat[0].length;

    const result = Array.from({ length: rows }, () => Array.from({ length: cols }, () => Infinity));

    const queue = [];

    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            if(mat[i][j] === 0) {
                queue.push([i,j]);
                result[i][j] = 0;
            }
        }
    }

    const dx = [-1,1,0,0];
    const dy = [0,0,-1,1];
    
    for(let [row,col] of queue) {
        for(let i = 0; i < 4; i++) {
            const nextRow = row + dx[i];
            const nextCol = col + dy[i];
            if(nextRow >= 0 && nextRow < rows && nextCol >= 0 && nextCol < cols) {
                if(result[nextRow][nextCol] === Infinity) {
                    queue.push([nextRow, nextCol]);
                    result[nextRow][nextCol] = result[row][col] + 1;
                }
            }
        }
    }

    return result;
};
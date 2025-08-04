/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const hasDuplicates = (direction, num) => {
        const isRow = direction === "row";
        const arr = [];
        if(isRow) {
            for(let i = 0; i < 9; i++) {
                if(board[num][i] !== ".") {
                    arr.push(board[num][i]);
                }
            }
        } else {
            for(let i = 0; i < 9; i++) {
                if(board[i][num] !== ".") {
                    arr.push(board[i][num]);
                }
            }
        }

        if(new Set(arr).size !== arr.length) return true;
        else return false;
    }

    const hasDuplicatesInMatrix = (row, col) => {
        const arr = [];

        for(let i = row; i < row + 3; i++) {
            for(let j = col; j < col + 3; j++) {
                if(board[i][j] !== ".") {
                    arr.push(board[i][j]);
                }
            }
        }

        if(new Set(arr).size !== arr.length) return true;
        else return false;
    }

    for(let i = 0; i < 9; i++){
        if(hasDuplicates("row",i) || hasDuplicates("col",i)) return false;
    }

    for(let i = 0; i < 7; i = i + 3) {
        for(let j = 0; j < 7; j = j + 3) {
            if(hasDuplicatesInMatrix(i,j)) return false;
        }
    }

    return true;
};


function solution(board) {
    const map = [...Array(board.length)].map(()=>[...Array(board[0].length)].map(()=>0));
    
    board.forEach((row,i)=>{
        row.forEach((value,j)=>{
            if(board[i][j] === 1){
                if(i - 1 >= 0 && j - 1 >= 0) map[i - 1][j - 1] = 1;
                if(i - 1 >= 0) map[i - 1][j] = 1;
                if(i - 1 >= 0 && j + 1 < row.length) map[i - 1][j + 1] = 1;
                
                if(j - 1 >= 0) map[i][j - 1] = 1;
                map[i][j] = 1;
                if(j + 1 < row.length) map[i][j + 1] = 1;
                
                if(i + 1 < board.length && j-1 >= 0) map[i + 1][j - 1] = 1;
                if(i + 1 < board.length) map[i + 1][j] = 1;
                if(i + 1 < board.length && j+1 < row.length) map[i + 1][j + 1] = 1;
            }
        })
    })
    
    return map.reduce((acc,row) => acc + row.filter(x=> x === 0).length, 0);
}
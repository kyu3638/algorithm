function solution(m, n, board) {
    const map = board.map(blocks=>blocks.split(''));
    let removedBlock = [];
    let count = 0;
    // 현재 상황에서 지워지는 블럭들을 확인하는 함수
    function checkBlocks(r,c){
        // r,c를 받아서 근처 3개의 블럭이 같은 블럭인지를 체크
        const block = map[r][c];
        if(r+1 < m && c+1 < n){
            if(map[r][c+1] === block && map[r+1][c] === block && map[r+1][c+1] === block){
                removedBlock.push([r,c]);
                removedBlock.push([r,c+1]);
                removedBlock.push([r+1,c]);
                removedBlock.push([r+1,c+1]);
            } else return;
        }
    }
    // 블럭들을 지우는 함수
    function eraseBlocks(r,c){
        if(map[r][c] !== '.'){
            map[r][c] = '.';
            count++;
        }
        removedBlock = [];
    }
    // 지워진 상황에서, 블럭들을 하강시키는 함수
    function down(){
        for(let col = 0; col < n; col++){
            let stack = [];
            for(let row = m-1; row >= 0; row--){
                if(map[row][col] !== '.') {
                    stack.push(map[row][col]);
                    map[row][col] = '.';
                }
            }
            const len = stack.length
            for(let newRow = m - 1; newRow > m - 1 - len; newRow--){
                const block = stack.shift()
                map[newRow][col] = block;
            }
            stack = [];
        }
    }
    
    let flag = true;
    while(flag){
        let prevCount = count;
        
        for(let i = 0; i < m; i++){
            for(let j = 0; j < n; j++){
                if(map[i][j]!=='.') checkBlocks(i,j)
            }
        }
        

        for(const position of removedBlock){
            eraseBlocks(position[0],position[1]);
        }
        
        down();
        
        if(count > prevCount) continue;
        else flag = false;
        
    }
    
    return count;
}
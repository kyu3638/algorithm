function solution(m, n, board) {
    const map = board.map(blocks=>blocks.split(''));
    // 현재 상황에서 지워질 좌표를 담는 배열
    let removedBlock = [];
    // 전체 지워지는 블럭의 수
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
    
    // 지우기, 내리기를 반복할지 결정하기 위한 flag
    let flag = true;
    while(flag){
        // 이전 회차 count를 prevCount에 담고 마지막에 같으면 현재 상황에서 더 지울게 없다는 의미이므로 반복 종료하면 됨
        let prevCount = count;
        
        // 좌표를 돌며 지울 블럭의 좌표들을 담기
        for(let i = 0; i < m; i++){
            for(let j = 0; j < n; j++){
                if(map[i][j]!=='.') checkBlocks(i,j)
            }
        }
        
        // 좌표들을 지우기
        for(const position of removedBlock){
            eraseBlocks(position[0],position[1]);
        }
        
        // 블럭을 빈 공간으로 내리기
        down();
        
        // 이번회차에서 지운게 있다면 다음 반복 진행, 그렇지 않다면 반복 그만
        if(count > prevCount) continue;
        else flag = false;
    }
    
    return count;
}

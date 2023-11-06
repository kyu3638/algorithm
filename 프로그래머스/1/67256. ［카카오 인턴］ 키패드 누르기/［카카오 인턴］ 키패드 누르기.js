function solution(numbers, hand) {
    var answer = [];
    const key =[[1,2,3],
                [4,5,6],
                [7,8,9],
                ['*',0,'#']];
    
    // 현재 위치에서 목적지를 찾아가는 함수
    function bfs(row, col, destR, destC){
        // 현재 위치가 목적지인 경우
        if(row === destR && col === destC) return [row, col, 0];
        const q = [[row, col, 0]];
        const dr = [-1, 1, 0, 0];
        const dc = [0, 0, -1, 1];
        let visited = [...Array(4)].map(()=>[...Array(3)].fill(false));
        visited[row][col] = true;
        while(q.length){
            const [r, c, distance] = q.shift();
            for(let i = 0; i < 4; i++){
                const nr = r + dr[i];
                const nc = c + dc[i];
                if(nr >= 0 && nr < key.length && nc >= 0 && nc < key[0].length){
                    if(!visited[nr][nc]){
                        // 목적지를 찾는 경우 목적지의 row, col, 거리를 반환
                        if(nr === destR && nc === destC) return [nr, nc, distance + 1];
                        q.push([nr, nc, distance + 1]);
                        visited[nr][nc] = true;
                    }
                }
            }
        }
    }
    // 출발위치
    let leftPosition = [3, 0];
    let rightPosition = [3, 2];
    // 모든 numbers에 대해 반복
    while(numbers.length){
        const goal = numbers.shift();
        // 왼손, 오른손으로 처리해야하는 경우에 대한 처리
        if(goal === 1){
            answer.push('L');
            leftPosition = [0, 0]
            continue;
        }
        if(goal === 4){
            answer.push('L');
            leftPosition = [1, 0]
            continue;
        }
        if(goal === 7){
            answer.push('L');
            leftPosition = [2, 0]
            continue;
        }
        if(goal === 3){
            answer.push('R');
            rightPosition = [0, 2]
            continue;
        }
        if(goal === 6){
            answer.push('R');
            rightPosition = [1, 2]
            continue;
        }
        if(goal === 9){
            answer.push('R');
            rightPosition = [2, 2]
            continue;
        }
        // 2,5,8,0에 대한 처리
        for(let i = 0; i < key.length; i++){
            for(let j = 0; j < key[0].length; j++){
                if(key[i][j] === goal){
                    const leftDistance = bfs(leftPosition[0], leftPosition[1], i, j);
                    
                    const rightDistance = bfs(rightPosition[0], rightPosition[1], i, j);
                    
                    
                    if(leftDistance[2] < rightDistance[2]){
                        answer.push('L');
                        leftPosition = [leftDistance[0], leftDistance[1]];
                    }
                    else if(leftDistance[2] > rightDistance[2]) {
                        answer.push('R');
                        rightPosition = [rightDistance[0], rightDistance[1]];
                    }                        
                    else if(leftDistance[2] === rightDistance[2]) {
                        if(hand === 'right'){
                            answer.push('R')
                            rightPosition = [rightDistance[0], rightDistance[1]];
                        }
                        else {
                            answer.push('L')
                            leftPosition = [leftDistance[0], leftDistance[1]];
                        }
                    }
                }
            }
        }
    }
    
    return answer.join('');
}
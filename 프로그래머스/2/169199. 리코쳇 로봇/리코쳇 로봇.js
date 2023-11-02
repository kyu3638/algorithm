function solution(board) {
    let answer = -1;
    // board를 2차원 배열로 수정
    board = board.map(v=>v.split(''));
    // 방문여부 기록할 배열
    const visited = board.map(a=>a.map(b=>false));
    // 'G',' D'와 '.'를 변수화해서 사용
    const R = 'R';
    const G = 'G';
    const D = 'D';
    const dot = '.';
    
    // 좌, 우, 상, 하로 이동하는 함수들
    function toLeft(row, col, cnt){
        // 현재 col에서부터 0까지
        for(let i = col; i >= 0; i--){
            // 'D'를 만나거나 '.'을 만나는 경우 멈추는데
            if(board[row][i] === D){
                // D를 만나면 그 전에 정지
                return [row, i + 1, cnt + 1];
            } else if(i === 0){
                // 벽에 도착하면 그 자리에 정지
                return [row, i, cnt + 1];
            }
        }
    }
    
    function toRight(row, col, cnt){
        for(let i = col; i < board[0].length; i++){
            if(board[row][i] === D){
                return [row, i - 1, cnt + 1];
            } else if(i === board[0].length - 1){
                return [row, i, cnt + 1];
            }
        }
    }
    
    function toTop(row, col, cnt){
        for(let i = row; i >= 0; i--){
            if(board[i][col] === D){
                return [i + 1, col, cnt + 1];
            } else if(i === 0){
                return [i, col, cnt + 1];
            }
        }
    }
    
    function toBottom(row, col, cnt){
        for(let i = row; i < board.length; i++){
            if(board[i][col] === D){
                return [i - 1, col, cnt + 1];
            } else if(i === board.length - 1){
                return [i, col, cnt + 1];
            }
        }
    }
    
    // 네 방향 다 둘러보기 위한 명령을 배열에 담음
    const order = [toLeft, toRight, toTop, toBottom]
    
    function bfs(x,y){
        // 몇 번 만에 방문했는지 체크
        let count = 0;
        // 큐에 넣고
        const q = [[x,y,count]];
        // 방문처리
        visited[x][y] = true;
        while(q.length){
            const [row, col, cnt] = q.shift();
            for(let i = 0; i < 4; i++){
                const dest = order[i](row, col, cnt);
                // 방문한 적이 없고,
                if(!visited[dest[0]][dest[1]]){
                    // 목적지라면 dest[2] (cnt) 반환
                    if(board[dest[0]][dest[1]] === G) {
                        return answer = dest[2];
                    }
                    // 목적지 아니라면 큐에 넣고 방문처리
                    q.push(dest);
                    visited[dest[0]][dest[1]] = true;
                }
            }
        }
    }
    
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[0].length; j++){
            if(board[i][j] === R) bfs(i,j);
        }
    }
    
    return answer;
}
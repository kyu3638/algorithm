function solution(maps) {
    maps = maps.map(v => v.split(''));
    let visited = maps.map(arr => arr.map(v => false));
    
    function bfs(sr, sc){
        let q = [[sr, sc, 0, false]];
        visited[sr][sc] = true;
        while(q.length){
            let [row, col, count, visitedLever] = q.shift();
            const dr = [-1, 1, 0, 0];
            const dc = [0, 0, -1, 1];
            for(let i = 0; i < 4; i++){
                const nr = row + dr[i];
                const nc = col + dc[i];
                if(nr >= 0 && nr < maps.length && nc >= 0 && nc < maps[0].length && !visited[nr][nc] && maps[nr][nc] !== 'X'){
                    // 다음 통로가 레버인 경우
                    if(maps[nr][nc] === 'L' && !visitedLever){
                        visited = maps.map(arr => arr.map(v => false));
                        visited[nr][nc] = true;
                        visitedLever = true;
                        q = [];
                        q.push([nr, nc, count + 1, visitedLever])
                        break;
                    }
                    
                    if(maps[nr][nc] === 'E' && visitedLever) {
                        return count + 1;
                    }
                    
                    visited[nr][nc] = true;
                    q.push([nr, nc, count + 1, visitedLever])
                }
            }
        }
        return -1;
    }
    
    for(let i = 0; i < maps.length; i++){
        for(let j = 0; j < maps[0].length; j++){
            if(maps[i][j] === 'S') return bfs(i,j);
        }
    }
}
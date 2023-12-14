function solution(maps) {
    const answer = [];
    const map = maps.map(v=>v.split(''));
    const visited = map.map(v=>v.map(()=>false));
    
    function bfs(x,y){
        const q = [[x,y]];
        let count = Number(map[x][y]);
        visited[x][y] = true;
        const dr = [-1, 1, 0, 0];
        const dc = [0, 0, -1, 1];
        while(q.length){
            const [r,c] = q.shift();
            for(let i = 0; i < 4; i++){
                const nr = r + dr[i];
                const nc = c + dc[i];
                if(nr >= 0 && nr < map.length && nc >= 0 && nc < map[0].length){
                    if(!visited[nr][nc] && map[nr][nc] !== 'X'){
                        q.push([nr, nc]);
                        count += Number(map[nr][nc]);
                        visited[nr][nc] = true;
                    }
                }
            }
        }
        answer.push(count);
    }
    
    for(let i = 0; i < map.length; i++){
        for(let j = 0; j < map[0].length; j++){
            if(!visited[i][j] && map[i][j]!=='X') bfs(i,j);
        }
    }
    if(answer.length) return answer.sort((a,b)=>a-b);
    else return [-1]; 
}
function solution(land) {
    const landObj = {};
    let index = 0;
    
    let max = 0;
    
    const totalRow = land.length;
    const totalCol = land[0].length;
    
    const visited = [...Array(totalRow)].map(()=>[...Array(totalCol)].map(()=>-1));
    
    
    function bfs(x,y,index){
        const q = [[x,y]];
        visited[x][y] = index;
        let count = 1;
        const dr = [-1, 1, 0, 0];
        const dc = [0, 0, -1, 1];
        while(q.length){
            const [r, c] = q.shift();
            for(let i = 0; i < 4; i++){
                const nr = r + dr[i];
                const nc = c + dc[i];
                if(nr >= 0 && nr < totalRow && nc >= 0 && nc < totalCol){
                    if(land[nr][nc] && visited[nr][nc] === -1){
                        count++;
                        visited[nr][nc] = index;
                        q.push([nr,nc])
                    }
                }
            }
        }
        landObj[index] = count;
    }
    
    for(let i = 0; i < totalCol; i++){
        for(let j = 0; j < totalRow; j++){
            if(land[j][i] && visited[j][i] === -1) {
                bfs(j,i,++index);
            }
        }
    }
    
    for(let i = 0; i < totalCol; i++){
        let result = [];
        let sum = 0;
        for(let j = 0; j < totalRow; j++){
            if(visited[j][i] !== -1) result.push(visited[j][i])
        }
        result = new Set(result);
        result = [...result];
        for(const num of result) sum += landObj[num];
        if(sum > max) max = sum;
    }
    
    
    return max;
}
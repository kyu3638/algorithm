function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    const dx = [-1,1,0,0];
    const dy = [0,0,-1,1];
    
    const queue =[];
    function bfs(startX,startY){
        queue.push([startX,startY,1]);
        
        while(queue.length){
            const [x,y,distance] = queue.shift();
            if(x === n - 1 && y === m - 1) {
                return distance;
            }

            for(let i = 0; i < 4; i++){
                const nx = x + dx[i];
                const ny = y + dy[i];
                if(nx >= 0 && nx < n && ny >=0 && ny < m && maps[nx][ny] === 1){
                    // console.log(`n:${n}, m:${m}, nx:${nx}, ny:${ny}`)
                    queue.push([nx, ny, distance + 1]);
                    // console.log(queue);
                    maps[nx][ny]=0;
                }
            }
        }
        return -1;
    }
    return bfs(0,0);
}
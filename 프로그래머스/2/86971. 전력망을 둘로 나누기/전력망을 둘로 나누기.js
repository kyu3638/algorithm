function solution(n, wires) {
    const answer = [];
    for(let k = 0; k <= wires.length; k++){
        const map = [...Array(n+1)].map(()=>[]);
        const visited = [...Array(n+1)].map(()=>false);
        function bfs(start){
            const q = [start];
            visited[start] = true;
            let count = 1;
            while(q.length){
                const num = q.shift();
                for(let i = 0; i < map[num].length; i++){
                    if(!visited[map[num][i]]){
                        q.push(map[num][i]);
                        visited[map[num][i]] = true;
                        count++;
                    }
                }
            }
            return count;
        }
        wires.forEach(([a,b],i)=>{
            if(i === k) return;
            map[a].push(b);
            map[b].push(a);
        })
        const a = bfs(1);
        const b = n - a;
        answer.push(Math.abs(a-b))
    }
    return Math.min(...answer)
}
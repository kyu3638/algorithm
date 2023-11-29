function solution(n, roads, sources, destination) {
    const answer = [];
    const graph = [...Array(n+1)].map(()=>[]);
    for(const road of roads){
        const [a,b] = road;
        graph[a].push(b);
        graph[b].push(a);
    }
    
    const visited = [...Array(n+1)].map(()=>-1);
    visited[destination] = 0;
    function bfs(start){
        if(start === destination){
            visited[start] === 0;
        }
        const q = [[start,0]];
        visited[start] = 0;
        while(q.length){
            const [location, distance] = q.shift();
            graph[location].forEach((area, index)=>{
                // 방문한 적이 없으면
                if(visited[area] === -1){
                    q.push([area, distance + 1])
                    visited[area] = distance + 1;
                }
            })
        }
    }
    
    bfs(destination);
    for(const source of sources){
        answer.push(visited[source])
    }
    
    return answer;
}
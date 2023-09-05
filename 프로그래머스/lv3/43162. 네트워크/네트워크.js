function solution(n, computers) {
    // n : 컴퓨터의 개수
    // computers : 컴퓨터의 관계를 담은 그래프
    
    // 풀이 계획
    // 0번 컴퓨터부터 bfs로 순회, 방문한 컴퓨터는 true로 방문 표시
    // bfs함수가 종료될 때마다 count++ 해주고,
    // count 반환하도록 코드 구현
    const graph = [];
    
    for(let i = 0; i < n; i++){
        graph.push([])
    }

    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if(i===j) continue;
            if(computers[i][j] === 1){
                graph[i].push(j);
            }
        }
    }
    
    const visited = new Array(n).fill(false);
    function dfs(start){
        if(visited[start] === true) return;
        visited[start] = true;
        for(let i = 0; i < graph[start].length;i++){
            dfs(graph[start][i]);
        }
    }
    
    let count = 0;
    for(let i = 0; i < n;i++){
        if(!visited[i]){
            dfs(i);
            count++;
        }
    }
    return count;

}


    // const queue = [];
    // function bfs(start){
    //     if(visited[start]) return;
    //     queue.push(start);
    //     visited[start] = true;
    //     while(queue.length){
    //         const x = queue.shift();
    //         if(graph[x]){
    //                 for(let i = 0; i < graph[x].length; i++){
    //                 if(visited[graph[x][i]]) continue;
    //                 queue.push(visited[graph[x][i]]);
    //                 visited[graph[x][i]] = true;
    //                 bfs(i);
    //             }
    //         }
    //     }
    //     console.log(visited);
    // }
    // bfs(0);
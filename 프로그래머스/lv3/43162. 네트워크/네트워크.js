function solution(n, computers) {
    var answer = 0;
    const visitedBfs= new Array(n).fill(false);
    // console.log(visitedBfs);
    
    function bfs(start){
        const q = [start];
        visitedBfs[start] = true;
        while(q.length > 0){
            let x = q.shift();
            for(let i = 0; i < computers[x].length; i++){
                if(computers[x][i] && !visitedBfs[i]){
                    q.push(i);
                    visitedBfs[i] = true;
                }
            }
        }
        answer++;
    }
    
    for(let i = 0; i < n; i++){
        if(!visitedBfs[i]) {
            bfs(i);
        }
    }
    console.log(visitedBfs)
    return answer;
}
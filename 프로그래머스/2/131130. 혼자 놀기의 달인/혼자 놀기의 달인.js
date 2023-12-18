function solution(cards) {
    const len = [];
    const graph = [...Array(cards.length+1)].map(()=>0);
    cards.forEach((num,index)=>{
        graph[num] = index+1;
    })

    const visited = [...Array(cards.length+1)].map(()=>false);
    function bfs(start){
        const q = [start];
        visited[start] = true;
        let count = 1;
        while(q.length){
            const num = q.shift();
            if(!visited[graph[num]]){
                visited[graph[num]] = true;
                q.push(graph[num])
                count++;
            }
        }
        len.push(count);
    }

    for(let i = 1; i <= cards.length; i++){
        if(!visited[i]) bfs(i);
    }
    len.sort((a,b)=>b-a);
    if(len.length === 1) return 0;
    else return len[0]*len[1]
}
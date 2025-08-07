function solution(n, wires) {
    // 송전탑(노드)이 전선(간선)을 통해 트리 형태로 연결되어 있음
    // 간선을 하나 끊어서 전력망 네트워크를 2개로 분할하고자 함
    // 두 전력망이 비슷한 수의 송전탑을 갖도록 하는 것이 목표
    
    // 결국 wire하나를 없애서 만들어지는 두 트리의 송전탑 개수의 차이를 반환하면 됨
    
    
    const diffs = [];
    const bfs = (obj) => {
        const visited = Array.from({length:n+1}, () => false);
        
        const queue = [1];
        visited[1] = true;
        let front = 0;
        let count = 1;
        
        while(front < queue.length) {
            const node = queue[front++];
            const connected = obj[node] || [];
            for(const n of connected) {
                if(visited[n] === false) {
                    visited[n] = true;
                    queue.push(n);
                    count++;
                }
            }
        }
        
        return count;
    }
    
    for (let i = 0; i < wires.length; i++) {
        // i 번째 인덱스 없이 간다.
        const removed = wires.filter((_,index) => index !== i);
        const obj = {};
        removed.forEach(([from, to]) => {
            if(!obj[from]) obj[from] = [];
            if(!obj[to]) obj[to] = [];
            obj[from].push(to);
            obj[to].push(from);
        })
        
        const count = bfs(obj);
        const otherCount = n - count;
        diffs.push(count > otherCount ? count - otherCount : otherCount - count);
    }
    
    return Math.min(...diffs);
}
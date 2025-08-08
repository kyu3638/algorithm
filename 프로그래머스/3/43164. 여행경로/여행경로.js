function solution(tickets) {
    tickets.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1].localeCompare(b[1]);
        }
        return a[0].localeCompare(b[0]);
    });
    
    const graph = {};
    tickets.forEach(([from, to]) => {
        if (!graph[from]) {
            graph[from] = [];
        }
        graph[from].push(to);
    });
    
    const totalTickets = tickets.length;
    
    function dfs(current, path, used) {
        if (path.length === totalTickets + 1) {
            return path;
        }
        
        if (!graph[current]) return null;
        
        for (let i = 0; i < graph[current].length; i++) {
            if (used[current] && used[current][i]) continue;
            
            const next = graph[current][i];
            
            if (!used[current]) used[current] = [];
            used[current][i] = true;
            
            const result = dfs(next, [...path, next], used);
            
            if (result) return result;
            
            used[current][i] = false;
        }
        
        return null;
    }
    
    return dfs("ICN", ["ICN"], {});
}
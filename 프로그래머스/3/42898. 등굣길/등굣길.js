function solution(m, n, puddles) {
    const map = Array.from({length:n}, () => Array.from({length:m}, () => Infinity));
    map[0][0] = 1;
    puddles.forEach(([col,row]) => {
        map[row - 1][col - 1] = -1
    });
    
    for (let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            // map[i-1][j] + map[i][j-1]
            if(i === 0 && j === 0) continue;
            if(map[i][j] === -1) continue;
            
            const fromTop = i-1 < 0 || map[i-1][j] === -1 ? 0 : map[i-1][j];
            const fromLeft = j-1 <0 || map[i][j-1] === -1 ? 0 : map[i][j-1];
            map[i][j] = fromTop + fromLeft % 1000000007;
        }
    }
    
    return map[n-1][m-1] % 1_000_000_007;
}
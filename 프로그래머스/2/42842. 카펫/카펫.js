function solution(brown, yellow) {
    const total = brown + yellow;
    
    // h로 순회함으로써 w가 더 큼을 보장
    // 근데 왜 <= Math.sqrt(total) 일까??
    for(let h = 3; h <= Math.sqrt(total); h++) {
        if(total % h === 0) {
            const w = total / h;
            
            if((w-2) * (h-2) === yellow) {
                return [w, h];
            }
        }
    }
}
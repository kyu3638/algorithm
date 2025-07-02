function solution(n) {
    let noThree = 0;
    
    for(let i = 1; i <= n; i++) {
        noThree += 1;
        while(noThree % 3 === 0 || String(noThree).split('').includes('3')) {
            noThree += 1;
        }
    }
    
    return noThree;
}
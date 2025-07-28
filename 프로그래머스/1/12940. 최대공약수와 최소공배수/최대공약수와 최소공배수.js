function solution(n, m) {
    const answer = [];
    
    let min = n <= m ? n : m;
    
    for(let i = min; i > 0; i--){
        if(n % i === 0 && m % i === 0) {
            answer.push(i);
            break;
        }
    }
    
    let big = n <= m ? m : n;
    
    while(true) {
        if(big % n === 0 && big % m === 0){
            answer.push(big);
            break;
        }
        big++;
    }
    
    return answer;
}
function solution(n) {
    var answer = [n];
    
    while(true) {
        if(!isOdd(n)) n = n / 2;
        else n = 3 * n + 1;
        
        answer.push(n);
        
        if(n === 1) break;
    }
    
    return answer;
}

const isOdd = (num) => num % 2;
function solution(num) {
    if(num === 1) return 0;
    // 시도 횟수
    let answer = 0;
    
    while(answer <= 500) {
        if(isOdd(num)) {
            num = 3 * num + 1;
        } else {
            num = num / 2;
        }
        answer++;
        
        if(num === 1) break;
    }
    
    
    return answer === 501 ? -1 : answer;
}
    
const isOdd = (num) => num % 2;
function solution(k, d) {
    var answer = 0;
    for(let i = 0; i * k <= d; i++){
        const col = Math.floor(Math.sqrt(d*d - (i*k)*(i*k)));
        answer += Math.floor(col / k) + 1;
    }
    return answer;
}